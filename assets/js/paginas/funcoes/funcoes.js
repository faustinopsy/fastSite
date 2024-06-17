const funcoes = {
    navHome: function(){
        location.hash = '#home'
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    },
    navSobre: function(){
        location.hash = '#curriculo'
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    },
    navContato: function(){
        location.hash = '#contato'
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    },
    navProjetos: function(){
        location.hash = '#portifolio'
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    },
    toggleMenu: function(){
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
      },
    closeMenu: function(){
    const menu = document.getElementById('menu');
        if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        }
    }
}
export default funcoes;
