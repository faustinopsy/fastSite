import * as fabricar from "../core/Fabrica.js";
const dadosPagina = {
  estiloPadrao: {
    border: "2px solid black",
    "box-sizing": "border-box"
  },
  main: {
    tipo: "main",
    style: {
      border: "2px solid black",
      "box-sizing": "border-box",
      display: "flex",
      "flex-direction": "column",
      background: "black",
      height: "auto"
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
      height: "100%"
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
  textContent:'Página Contato',
};
const metadescricao = {
  tipo: 'meta',
  name:'description',
  content:'Descrição da página Contato',
};
const metaautor = {
  tipo: 'meta',
  name:'author',
  content:'Rodrigo Faustino',
};
const metakeywords = {
  tipo: 'meta',
  name:'keywords',
  content:'palavra, palavra, Contato',
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


function metaContato() {
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


export async function fabricaContato(){
    const { main, article, section1, section2, aside, imagem } = dadosPagina;
  
    const novomain = fabricar.criarContainer(main);
    const article0 = fabricar.criarContainer(article);
    const imagemSrc = fabricar.criarContainer(imagem);
    const novoarticle = fabricar.criarContainer(article);
    const novosection1 = fabricar.criarContainer(section1);
    const novosection2 = fabricar.criarContainer(section2);
    const novoaside = fabricar.criarContainer(aside);
    article0.style.height = '200px'
    article0.appendChild(imagemSrc)
   
    novoarticle.appendChild(novosection1)
    novoarticle.appendChild(novosection2)
    novoarticle.appendChild(novoaside)
    novomain.appendChild(article0)
    novomain.appendChild(novoarticle)

    return novomain
    
  }
  export function metaTagsContato() {
    metaContato()
}
