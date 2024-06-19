import * as fabricar from "../../core/Fabrica.js";

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
    textContent: "Contato",
    eventos: {
      click: "navContato"
    }
  }
};
export default function fabricaMenu() {
  const {menu,sideLine,svg,menuButton,ul,li,a1,a2,a3,a4} = dadosMenu;

  const novoMenu = fabricar.criarContainer(menu);
  const novoSideLine = fabricar.criarContainer(sideLine);
  const novoSvg = fabricar.criarSvg();
  const novoMenuButton = fabricar.criarContainer(menuButton);
  const novoUl = fabricar.criarContainer(ul);

  const novoLi1 = fabricar.criarContainer(li);
  const novoLi2 = fabricar.criarContainer(li);
  const novoLi3 = fabricar.criarContainer(li);
  const novoLi4 = fabricar.criarContainer(li);

  const link1 = fabricar.criarBotao(a1);
  const link2 = fabricar.criarBotao(a2);
  const link3 = fabricar.criarBotao(a3);
  const link4 = fabricar.criarBotao(a4);
  link1.innerHTML = '&#128204; Home '
  link2.innerHTML = '&#128187; Portfolio'
  link3.innerHTML = '&#128209; Curriculo'
  link4.innerHTML = '&#128240; Contato'
  novoLi1.appendChild(link1);
  novoLi2.appendChild(link2);
  novoLi3.appendChild(link3);
  novoLi4.appendChild(link4);

  novoUl.appendChild(novoLi1);
  novoUl.appendChild(novoLi2);
  novoUl.appendChild(novoLi3);
  novoUl.appendChild(novoLi4);

  novoMenu.appendChild(novoSideLine);
  novoMenu.appendChild(novoSvg);
  novoMenu.appendChild(novoMenuButton);
  novoMenu.appendChild(novoUl);

  return novoMenu;
}
