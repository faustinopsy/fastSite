export default function Especial() {
    const cards = document.querySelectorAll('.card');
    const link = document.querySelectorAll('a');
    const menu = document.querySelector('.menu');
    const hora = new Date().getHours();

    const isDay = hora >= 6 && hora < 18;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
            card.classList.add('dark-bg');
            card.classList.remove('light-bg');
        } else {
            card.classList.add('light-bg');
            card.classList.remove('dark-bg');
        }
    });

    if (isDay) {
        menu.style.backgroundColor = '#b19f11a8';
        link.forEach((a) => {
            a.style.color= 'black'
        })
        document.body.style.backgroundImage = 'url("./assets/css/img/montanha-dia.webp")';
    } else {
        document.body.style.backgroundImage = 'url("./assets/css/img/montanha-noite.webp")';
        cards.forEach(card => {
            card.classList.add('dark-bg');
            card.classList.remove('light-bg');
        });
    }
}
