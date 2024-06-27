import * as fabricar from "../core/Fabrica.js";

const dadosPagina = {
  estiloPadrao: {
    border: "2px solid black",
    "box-sizing": "border-box"
  },
  main: {
    tipo: "main",
    style: {
      'background-color': "white",
      'box-sizing': 'border-box',
      'backdrop-filter': 'blur(30px)',
      'border': "2px solid black",
      display: "flex",
      "flex-direction": "column",
      "min-height": "400vh",
      padding: '7px',
      'margin-left': '39px'
    }
  },
  article: {
    tipo: "article",
    style: {
        border: '2px solid black',
        'box-sizing': 'border-box',
        display: 'flex',
        'flex-wrap': 'wrap',
        width: '100%',
        'flex-direction': 'column',
        'align-content': 'center',
        'justify-content': 'center',
        'align-items': 'center'
    }
  },
  section1: {
    tipo: "section",
    style: {
      border: "2px solid black",
      "box-sizing": "border-box",
      padding: '10px',
      'flex-basis': '100%'
    }
  },
  section2: {
    tipo: "section",
    style: {
      border: "2px solid black",
      "box-sizing": "border-box",
      padding: '10px',
      'flex-basis': '100%'
    }
  },
  aside: {
    tipo: "aside",
    style: {
      border: "dashed 2px",
      "box-sizing": "border-box",
      width: "20%",
      height: "300px"
    }
  },
  imagem: {
    tipo: "img",
    style: {
      border: "2px solid black",
      "box-sizing": "border-box",
      width: "100px",
      height: "150px"
    }
  },
  header: {
    tipo: "header",
    style: {
      'background-color': "#0073b1",
      color: "white",
      padding: "20px",
      'text-align': "center",
      display: "flex",
      "flex-direction": "column",
      "align-items": "center"
    },
    children: [
      {
        tipo: "img",
        style: {
          'border-radius': "50%",
          width: "100px",
          height: "100px"
        }
      },
      {
        tipo: "h1",
        style: {
          margin: "10px 0 5px",
          'font-size': "24px"
        }
      },
      {
        tipo: "a",
        style: {
          color: "#fff",
          'text-decoration': "none"
        }
      }
    ]
  },
  section: {
    tipo: "section",
    style: {
      padding: "20px"
    },
    children: [
      {
        tipo: "h2",
        style: {
          'border-bottom': "2px solid #0073b1",
          'padding-bottom': "5px",
          'margin-bottom': "20px",
          'font-size': "20px"
        }
      },
      {
        tipo: "h3",
        style: {
          margin: "10px 0 5px",
          'font-size': "18px"
        }
      },
      {
        tipo: "h4",
        style: {
          margin: "5px 0",
          'font-size': "16px",
          'font-weight': "normal",
          color: "#0073b1"
        }
      },
      {
        tipo: "p",
        style: {
          margin: "5px 0 15px"
        }
      }
    ]
  },
  footer: {
    tipo: "footer",
    style: {
      'background-color': "#f4f4f9",
      padding: "10px",
      'text-align': "center",
      'font-size': "14px",
      color: "#888",
      width: "100%",
      position: "absolute",
      bottom: "0"
    },
    children: [
      {
        tipo: "a",
        style: {
          color: "#0073b1",
          'text-decoration': "none"
        }
      }
    ]
  }
};
const ajustarResponsividade = () => {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .main {
        margin-left: 0 !important;
        padding: 10px !important;
      }
      .header, .section, .footer {
        padding: 10px !important;
        text-align: center !important;
      }
      .section h2 {
        font-size: 18px !important;
      }
      .section h3 {
        font-size: 16px !important;
      }
      .section h4 {
        font-size: 14px !important;
      }
    }
  `;
  document.head.appendChild(style);
};
const titulo = {
  tipo: 'titulo',
  textContent:'Página Sobre',
};
const metadescricao = {
  tipo: 'meta',
  name:'description',
  content:'Descrição da página Sobre',
};
const metaautor = {
  tipo: 'meta',
  name:'author',
  content:'Rodrigo Faustino',
};
const metakeywords = {
  tipo: 'meta',
  name:'keywords',
  content:'palavra, palavra, Sobre',
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

function metaSobre() {
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
  ajustarResponsividade()
  
}
export async function fabricaSobre(data) {
  const { main, article, section1, section2, aside, imagem } = dadosPagina;
  const novomain = fabricar.criarContainer(main);

  const articleDadosPessoais = fabricar.criarContainer(article);
  const imagemSrc = fabricar.criarImagem(data.informacoesPessoais.fotoPerfil);
  imagemSrc.id= 'perfil'
  const nome = fabricar.criarElementoTexto('h1', data.informacoesPessoais.dadosPessoais.nome);
  const linkedin = fabricar.criarLink(`https://linkedin.com/in${data.informacoesPessoais.dadosPessoais.linkedin}`, `https://linkedin.com/in${data.informacoesPessoais.dadosPessoais.linkedin}`);
  
  articleDadosPessoais.appendChild(imagemSrc);
  articleDadosPessoais.appendChild(nome);
  articleDadosPessoais.appendChild(linkedin);
  novomain.appendChild(articleDadosPessoais);

  const sectionHabilidades = fabricar.criarContainer(section1);
  const tituloHabilidades = fabricar.criarElementoTexto('h2', 'Habilidades');
  sectionHabilidades.appendChild(tituloHabilidades);
  data.habilidades.forEach(habilidade => {
    const habilidadeNome = fabricar.criarElementoTexto('h4', `${habilidade.nome}`);
    const habilidadeElemento = fabricar.criarElementoTexto('p', `${habilidade.descricao}`);
    sectionHabilidades.appendChild(habilidadeNome);
    sectionHabilidades.appendChild(habilidadeElemento);
  });
  novomain.appendChild(sectionHabilidades);

  const sectionExperiencias = fabricar.criarContainer(section2);
  const tituloExperiencias = fabricar.criarElementoTexto('h2', 'Experiências');
  sectionExperiencias.appendChild(tituloExperiencias);
  data.experiencias.forEach(exp => {
    const expTitulo = fabricar.criarElementoTexto('h3', exp.cargo);
    const expEmpresa = fabricar.criarElementoTexto('h4', exp.empresa);
    const expPeriodo = fabricar.criarElementoTexto('p', exp.periodo);
    const expDescricao = fabricar.criarElementoTexto('p', exp.descricao);
    sectionExperiencias.appendChild(expTitulo);
    sectionExperiencias.appendChild(expEmpresa);
    sectionExperiencias.appendChild(expPeriodo);
    sectionExperiencias.appendChild(expDescricao);
  });
  novomain.appendChild(sectionExperiencias);

  const sectionAcademicos = fabricar.criarContainer(section1);
  const tituloAcademicos = fabricar.criarElementoTexto('h2', 'Dados Acadêmicos');
  sectionAcademicos.appendChild(tituloAcademicos);
  data.dadosAcademicos.forEach(dado => {
    const dadoCurso = fabricar.criarElementoTexto('h3', dado.curso);
    const dadoInstituicao = fabricar.criarElementoTexto('h4', dado.instituicao);
    const dadoPeriodo = fabricar.criarElementoTexto('p', dado.periodo);
    sectionAcademicos.appendChild(dadoCurso);
    sectionAcademicos.appendChild(dadoInstituicao);
    sectionAcademicos.appendChild(dadoPeriodo);
  });
  novomain.appendChild(sectionAcademicos);

  return novomain;
}

export function metaTagsSobre() {
  metaSobre()
}
