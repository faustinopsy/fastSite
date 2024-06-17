import fabricaMenu from "./paginas/nav/menu.js";
import fabricaRodape from "./paginas/footer/rodape.js";
import { fabricaHome } from "./paginas/home.js";
import { fabricaSobre } from "./paginas/sobre.js";
import { fabricaContato } from "./paginas/contato.js";
import { fabricaProjetos } from "./paginas/projetos.js";
import { metaHome } from "./paginas/headmeta/metahome.js";
import { metaContato } from "./paginas/headmeta/metacontato.js";
import { metaSobre } from "./paginas/headmeta/metasobre.js";
import { metaProjeto } from "./paginas/headmeta/metaprojeto.js";
import { MonitorarPerformance } from "./MonitorarPerformance.js";
import  especial  from "./funcoesEspeciais.js";

//const monitor = new MonitorarPerformance();

class PJCommand {
  constructor(execute, meta) {
    this.execute = execute;
    this.meta = meta;
  }
}

window.addEventListener('DOMContentLoaded', async function () {
  let navbar = fabricaMenu();
  let centerMenu = fabricaMenu('center');
  let footer = fabricaRodape();
  let tela = {};
  

  const scriptTag = document.querySelector("script[src='assets/js/App.js']");
  //document.body.insertBefore(footer, scriptTag);
  document.body.insertBefore(navbar, scriptTag);

  tela.home = await fabricaHome();
  tela.sobre = await fabricaSobre();
  tela.projetos = await fabricaProjetos();
  tela.contato = await fabricaContato();
  
  document.body.insertBefore(tela.home, scriptTag);
  especial()
  const PJCommands = {
    '#home': new PJCommand(
      () => document.body.insertBefore(tela.home, scriptTag),
      metaHome
    ),
    '#projetos': new PJCommand(
      () => document.body.insertBefore(tela.projetos, scriptTag),
      metaProjeto
    ),
    '#sobre': new PJCommand(
      () => document.body.insertBefore(tela.sobre, scriptTag),
      metaSobre
    ),
    '#contato': new PJCommand(
      () => document.body.insertBefore(tela.contato, scriptTag),
      metaContato
    ),
    'default': new PJCommand(
      async () => document.body.insertBefore(tela.home, scriptTag),
      metaHome
    )
  };

  window.addEventListener('hashchange', function () {
    const PJCommand = PJCommands[location.hash] || PJCommands['default'];
    removeMain();
    PJCommand.meta();
    PJCommand.execute();
  });

  function removeMain() {
    let main = document.querySelector("main");
    document.querySelector("head").innerHTML = '';
    document.querySelector("head").innerHTML ='<link rel="stylesheet" href="assets/css/styles.css">';
    if (main && main.parentNode) {
      main.parentNode.removeChild(main);
    }
  }


});



 