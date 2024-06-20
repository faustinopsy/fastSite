import * as fabricar from "../core/Fabrica.js";
import fabricaCard from "./cards/fabricaCard.js";

const dadosPagina = {
  estiloPadrao: {
    border: "2px solid black",
    "box-sizing": "border-box"
  },
  header: {
    tipo: "header",
    style: {
      "box-sizing": "border-box",
      textAlign: "center",
      padding: "20px",
      background: "lightblue",
      fontSize: "24px"
    },
    textContent: "Bem-vindo à Página Inicial"
  },
  main: {
    tipo: "main",
    style: {
      'box-sizing': 'border-box',
      'display': 'flex',
      'height': 'auto',
      'flex-direction': 'row',
      'flex-wrap': 'wrap',
      'justify-content': 'center',
      'gap': '5px',
      'margin': '10px'
    }
  },
  article: {
    tipo: "article",
    style: {
      border: "2px solid black",
      "box-sizing": "border-box",
      background: "lightgreen",
      display: "flex",
      "flex-wrap": "wrap",
      width: "100%",
      height: "100%",
      "justify-content": "center"
    }
  },
  section1: {
    tipo: "section",
    style: {
      border: "2px solid black",
      "box-sizing": "border-box",
      background: "lightcoral",
      width: "40%",
      height: "300px"
    }
  },
  section2: {
    tipo: "section",
    style: {
      border: "2px solid black",
      "box-sizing": "border-box",
      background: "lightsalmon",
      width: "40%",
      height: "300px"
    }
  },
  aside: {
    tipo: "aside",
    style: {
      border: "dashed 2px",
      "box-sizing": "border-box",
      background: "lightpink",
      width: "20%",
      height: "300px"
    }
  },
  imagem: {
    tipo: "img",
    style: {
      border: "2px solid black",
      "box-sizing": "border-box",
      width: "100%",
      height: "200px",
      background: "url(./img/rick.jpg) 100%",
      "background-repeat": "no-repeat",
      "background-size": "cover"
    }
  }
};
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
  export function metaTagsHome() {
    metaHome()
}
