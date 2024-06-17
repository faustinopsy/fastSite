const dadosMenu = {
  menu: {
    tipo: "div",
    id: "menu",
    class: "menu"
  },
  sideLine: {
    tipo: "div",
    class: "side-line"
  },
  svg: {
    tipo: "svg",
    class: "menu-svg",
    viewBox: "0 0 150 100",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      {
        tipo: "path",
          d: "M 100 150 q 40 -70 0 -130",
          fill: "#b19f11a8",
          strokeWidth: "0"
      }
    ]
  },
  menuButton: {
    tipo: "button",
    class: "menu-button",
    eventos: {
      click: "toggleMenu"
    },
    children: [
      {
        tipo: "span",
        class: "menu-button-icon"
      }
    ]
  },
  ul: {
    tipo: "ul"
  },
  li: {
    tipo: "li"
  },
  a1: {
    tipo: "a",
    atributos: { href: "#home" },
    textContent: "Inicio",
    eventos: {
      click: "navHome"
    }
  },
  a2: {
    tipo: "a",
    atributos: { href: "#portifolio" },
    textContent: "Portifolio",
    eventos: {
      click: "navProjetos"
    }
  },
  a3: {
    tipo: "a",
    atributos: { href: "#curriculo" },
    textContent: "Curriculo",
    eventos: {
      click: "navSobre"
    }
  },
  a4: {
    tipo: "a",
    atributos: { href: "#contato" },
    textContent: "Contact",
    eventos: {
      click: "navContato"
    }
  }
};

export default dadosMenu;
