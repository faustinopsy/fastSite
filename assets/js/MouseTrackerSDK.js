class MouseTrackerSDK {
    constructor(options) {
        this.options = options;
        this.movimentoMouser = [];
        this.rede = null;
        this.downlink  = null
        this.init();
    }

    init() {
        if(navigator.connection){
            navigator.connection.addEventListener('change', this.statusRede());
        }
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                this.enviarSevidor();
            }
        });
        window.addEventListener('beforeunload', this.enviarSevidor());

        const touchArea = document.body;

        touchArea.addEventListener('touchstart', this.rastrearMovimento.bind(this), { passive: false });
        touchArea.addEventListener('touchmove', this.rastrearMovimento.bind(this), { passive: false });
        touchArea.addEventListener('touchend', this.rastrearMovimento.bind(this));
        touchArea.addEventListener('touchcancel', this.rastrearMovimento.bind(this));

        document.addEventListener('mousemove', this.rastrearMovimento.bind(this));
         
    }
    statusRede() {
        if(navigator.connection){
            this.rede = navigator.connection.effectiveType;
            this.downlink  = navigator.connection.downlink
        }else{
            this.rede ='ff'
            this.downlink =0
        }
    }
    isMobile() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) || window.innerWidth <= 600;
    }
    rastrearMovimento(event) {
        this.statusRede()
        let dadosMovimento = null;

        if (event.type.startsWith('touch')) {
            const touch = event.touches[0] || event.changedTouches[0];
            dadosMovimento = {
                x: touch.clientX,
                y: touch.clientY,
                timestamp: Date.now(),
                mobile: this.isMobile(),
                url: location.href,
                rede: this.rede,
                velocidade: this.downlink
            };
        } else {
            dadosMovimento = {
                x: event.pageX,
                y: event.pageY,
                timestamp: Date.now(),
                mobile: this.isMobile(),
                url: location.href,
                rede: this.rede,
                velocidade: this.downlink
            };
        }

        console.log(this.movimentoMouser);
        const url = location.hash;
        if (!this.movimentoMouser[url]) {
            this.movimentoMouser[url] = [];
        }
        this.movimentoMouser.push(dadosMovimento);
        // if (this.movimentoMouser.length >= 15 && this.options.endpoint) {
        //     this.enviarSevidor();
        // }

        if (this.movimentoMouser.length > this.options.bufferSize) {
            this.movimentoMouser.shift();
        }
    }

    enviarSevidor() {
        if (this.movimentoMouser.length === 0) {
            return;
        }

        const dataToSend = {
            movements: this.movimentoMouser,
            siteKey: this.options.siteKey
        };

        fetch(this.options.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.options.apiToken}`
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Sem rede');
            }
            return response.json();
        })
        .then(data => {
            console.log('Dados enviados:', data);
            this.movimentoMouser = [];
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
    }
}

const options = {
    endpoint: 'http://localhost:8086/backAnalitics/api.php',
    apiToken: '123',
    bufferSize: 10,
    siteKey: 'your-site-key'
};
const mouser = new MouseTrackerSDK(options);


