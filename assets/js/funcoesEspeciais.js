
export default function Especial(){
    const cards = document.querySelectorAll('.card');
    const menu = document.querySelector('.menu');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const hour = new Date().getHours();
      if (rect.top > 300) {
        card.classList.add('dark-bg');
        card.classList.remove('light-bg');
      } else {
        card.classList.add('light-bg');
        card.classList.remove('dark-bg');
      }
      if (hour >= 6 && hour < 18) { 
          menu.style.backgroundColor = '#b19f11a8'
          document.body.style.backgroundImage = 'url("./assets/css/img/montanha-dia.webp")';
      } else { 
          card.classList.add('dark-bg');
          card.classList.remove('light-bg');
          document.body.style.backgroundImage = 'url("./assets/css/img/montanha-noite.webp")';
      }
    });
}
