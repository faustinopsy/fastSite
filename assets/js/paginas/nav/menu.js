import * as fabricar from "../../core/Fabrica.js";
import dadosMenu from "../../paginas/componentes/MenuComponentes.js";

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
