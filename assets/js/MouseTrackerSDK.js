class MouseTrackerSDK {
    constructor(options) {
        this.options = options;
        this.movimentoMouser = [];
        this.rede = null;
        this.downlink = null;
        this.referer = document.referrer;
        this.sessionId = this.generateSessionId();
        this.lastInteraction = Date.now();
        this.init();
    }

    init() {
        if (navigator.connection) {
            navigator.connection.addEventListener('change', this.statusRede.bind(this));
        }
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                this.enviarSevidor();
            }
        });
        window.addEventListener('beforeunload', () => {
            this.enviarSevidor();
        });

        const touchArea = document.body;

        touchArea.addEventListener('touchstart', this.rastrearMovimento.bind(this), { passive: false });
        touchArea.addEventListener('touchmove', this.rastrearMovimento.bind(this), { passive: false });
        touchArea.addEventListener('touchend', this.rastrearMovimento.bind(this));
        touchArea.addEventListener('touchcancel', this.rastrearMovimento.bind(this));

        document.addEventListener('mousemove', this.rastrearMovimento.bind(this));
    }

    generateSessionId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    statusRede() {
        if (navigator.connection) {
            this.rede = navigator.connection.effectiveType;
            this.downlink = navigator.connection.downlink;
        } else {
            this.rede = 'ff';
            this.downlink = 0;
        }
    }

    getOriginType() {
        const referer = this.referer.toLowerCase();
        if (referer.includes('google.com')) {
            return 'Google';
        } else if (referer.includes('facebook.com')) {
            return 'Facebook';
        } else if (referer.includes('instagram.com')) {
            return 'Instagram';
        } else if (referer.includes('twitter.com')) {
            return 'Twitter';
        } else if (referer.includes('br.linkedin.com')) {
            return 'LinkedIn';
        } else if (referer.includes('youtube.com')) {
            return 'YouTube';
        } else {
            return 'Outra';
        }
    }

    rastrearMovimento(event) {
        this.statusRede();
        this.lastInteraction = Date.now();

        let dadosMovimento = null;

        if (event.type.startsWith('touch')) {
            const touch = event.touches[0] || event.changedTouches[0];
            dadosMovimento = {
                x: touch.clientX,
                y: touch.clientY,
                timestamp: Date.now(),
                width: screen.width,
                height: screen.height,
                url: location.href,
                rede: this.rede,
                velocidade: this.downlink,
                referer: this.referer,
                origin: this.getOriginType(),
                sessionId: this.sessionId
            };
        } else {
            dadosMovimento = {
                x: event.pageX,
                y: event.pageY,
                timestamp: Date.now(),
                width: screen.width,
                height: screen.height,
                url: location.href,
                rede: this.rede,
                velocidade: this.downlink,
                referer: this.referer,
                origin: this.getOriginType(),
                sessionId: this.sessionId
            };
        }

        

        if (this.movimentoMouser.length <= this.options.bufferSize) {
            this.movimentoMouser.push(dadosMovimento);
            //this.movimentoMouser.shift();
        }

        localStorage.setItem('movimentoMouser', JSON.stringify(dadosMovimento));
    }

    enviarSevidor() {
        if (this.movimentoMouser.length === 0) {
            return;
        }

        const sessionDuration = (Date.now() - this.lastInteraction) / 1000; 
        const movimentosArmazenados = JSON.parse(localStorage.getItem('movimentoMouser'));
        const dadosFinais = movimentosArmazenados;
        
        if (dadosFinais) {
            this.movimentoMouser.push(dadosFinais);
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
            this.movimentoMouser = [];
            localStorage.removeItem('movimentoMouser');
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
    }
}

const options = {
    endpoint: '/backAnalitics/src/api.php',
    apiToken: '123',
    bufferSize: 10,
    siteKey: '000000009'
};
const mouser = new MouseTrackerSDK(options);
