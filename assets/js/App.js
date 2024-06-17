const worker = new Worker('./worker.js');
worker.postMessage({ type: 'fetchData' });

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
import especial from "./funcoesEspeciais.js";

//const monitor = new MonitorarPerformance();

class PJCommand {
  constructor(execute, meta) {
    this.execute = execute;
    this.meta = meta;
  }
}

let tela = {};

function inicializarPagina() {
  const scriptTag = document.querySelector("script[src='assets/js/App.js']");
  if (tela.home) {
    document.body.insertBefore(tela.home, scriptTag);
    especial();
  }
}

window.addEventListener('DOMContentLoaded', async function () {
  const navbar = fabricaMenu();
  const centerMenu = fabricaMenu('center');
  const footer = fabricaRodape();

  worker.addEventListener('message', async (event) => {
    const { type, data, error } = event.data;
    if (type === 'dadosJson') {

      if (data && data.cards) {
        tela.home = await fabricaHome(data.cards);
        console.log(tela.home);
        inicializarPagina();
      }
    } else if (type === 'error') {
      console.error('Erro ao buscar estruturas:', error);
    }
  });

  const scriptTag = document.querySelector("script[src='assets/js/App.js']");
  document.body.insertBefore(navbar, scriptTag);

  

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
    const main = document.querySelector("main");
    const head = document.querySelector("head");
    head.innerHTML = '<link rel="stylesheet" href="assets/css/styles.css">';
    if (main && main.parentNode) {
      main.parentNode.removeChild(main);
    }
  }
});
