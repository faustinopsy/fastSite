import * as fabricar from "../core/Fabrica.js";
import dadosPagina from "./componentes/HomeComponentes.js";
import fabricaCard from "./cards/fabricaCard.js";


const titulo = {
  tipo: 'titulo',
  textContent:'Página Home',
};
const metadescricao = {
  tipo: 'meta',
  name:'description',
  content:'Descrição da página Home',
};
const metaautor = {
  tipo: 'meta',
  name:'author',
  content:'Rodrigo Faustino',
};
const metakeywords = {
  tipo: 'meta',
  name:'keywords',
  content:'palavra, palavra, Home',
};
const metarobots = {
  tipo: 'meta',
  name:'robots',
  content:'index, follow',
};

const charset = {
  tipo: 'meta',
  charset:'UTF-8',
};
const viewport = {
  tipo: 'meta',
  name:'viewport',
  content: "width=device-width, initial-scale=1.0", 
};


function metaHome() {
  const head = document.querySelector('head');
  if (!head) {
      console.error('Elemento <head> não encontrado no documento.');
      return;
  }
  const viewportx = fabricar.criarContainer(viewport);
  head.appendChild(viewportx);
  const charsetx = fabricar.criarContainer(charset);
  head.appendChild(charsetx);
  const title = fabricar.criarContainer(titulo);
  head.appendChild(title);
  const descricao = fabricar.criarContainer(metadescricao); 
  head.appendChild(descricao);
  const autor = fabricar.criarContainer(metaautor); 
  head.appendChild(autor);
  const palavrasChaves = fabricar.criarContainer(metakeywords); 
  head.appendChild(palavrasChaves);
  const tagRobos = fabricar.criarContainer(metarobots); 
  head.appendChild(tagRobos);
  head.innerHTML =`<link rel="stylesheet" href="assets/css/styles.css">
  <link rel="stylesheet" href="assets/css/responsivo.css">`;
}

export async function fabricaHome(data){
    const { article,aside,estiloPadrao,imagem,main,section1,section2 } = dadosPagina;
    const novomain = fabricar.criarContainer(main);
    data.forEach(cardData => {
      if (cardData.titulo) {
        novomain.appendChild(fabricaCard(cardData));
      } else {
        console.warn('Card sem título encontrado:', cardData);
      }
    });
    return novomain
    
  }
  export  function metaTagsHome() {
    metaHome()
}
