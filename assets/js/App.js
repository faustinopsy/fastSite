const worker = new Worker('./worker.js');
worker.postMessage({ type: 'fetchData' });
import fabricaMenu from "./paginas/nav/menu.js";
import fabricaRodape from "./paginas/footer/rodape.js";
import { fabricaHome, metaTagsHome } from "./paginas/home.js";
import { fabricaSobre, metaTagsSobre } from "./paginas/sobre.js";
import { fabricaContato, metaTagsContato } from "./paginas/contato.js";
import { fabricaProjetos, metaTagsProjeto } from "./paginas/projetos.js";
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
const scriptTag = document.querySelector("script[src='assets/js/App.js']");
const PJCommands = {
  '#home': new PJCommand(
    () => document.body.insertBefore(tela.home, scriptTag),
    metaTagsHome
  ),
  '#portifolio': new PJCommand(
    () => document.body.insertBefore(tela.projetos, scriptTag),
    metaTagsProjeto
  ),
  '#curriculo': new PJCommand(
    () => document.body.insertBefore(tela.sobre, scriptTag),
    metaTagsSobre
  ),
  '#contato': new PJCommand(
    () => document.body.insertBefore(tela.contato, scriptTag),
    metaTagsContato
  ),
  'default': new PJCommand(
    async () => document.body.insertBefore(tela.home, scriptTag),
    metaTagsHome
  )
};

function inicializarPagina() {
  const PJCommand = PJCommands[location.hash] || PJCommands['default'];
  removeMain();
  PJCommand.meta();
  PJCommand.execute();
  especial();
  setTimeout(() => {
    document.querySelector('.modal').style.display = 'none'
  }, 1500)
}

function removeMain() {
  const main = document.querySelector("main");
  if (main && main.parentNode) {
    main.parentNode.removeChild(main);
  }
}

window.addEventListener('DOMContentLoaded', function () {
  const navbar = fabricaMenu();
  const centerMenu = fabricaMenu('center');
  const footer = fabricaRodape();

  worker.addEventListener('message', async (event) => {
    const { type, data, error } = event.data;
    if (type === 'dadosJson') {
      if (data) {
        tela.home = await fabricaHome(data.cards, inicializarPagina, removeMain);
        tela.sobre = await fabricaSobre(data.curriculo);
        tela.projetos = await fabricaProjetos(data.portifolio);

        inicializarPagina()
      }
    } else if (type === 'error') {
      console.error('Erro ao buscar estruturas:', error);
    }
  });

  document.body.insertBefore(navbar, scriptTag);

  window.addEventListener('hashchange', function () {
    const PJCommand = PJCommands[location.hash] || PJCommands['default'];
    removeMain();
    PJCommand.meta();
    PJCommand.execute();
    document.documentElement.scrollTop = 0;
    especial();
  });
});
