import * as fabricar from "../../core/Fabrica.js";
const dadosCard = {
  card: {
    tipo: "div",
    class: "card",
    style: {
      display: 'flex',
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      overflow: "hidden",
      width: "300px",
      boxSizing: "border-box",
      'border-radius': '0px 20px 0 20px',
      'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.5)',
      'backdrop-filter': 'blur(30px)',
      'flex-direction': 'column',
      'justify-content': 'center',
      'align-items': 'center',
    },
    children: [
      {
        tipo: "div",
        class: "card-header",
        style: {
          backgroundColor: "#f7f7f7",
          padding: "10px 20px",
          borderBottom: "1px solid #ccc",
          textAlign: "center",
          fontSize: "18px"
        },
        textContent: "Bem-vindo ao Card"
      },
      {
        tipo: "div",
        class: "card-body",
        style: {
          padding: "20px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [
          {
            tipo: "img",
            class: "card-image",
            atributos: {
              src: "./img/rick.jpg",
              alt: "Imagem do Card"
            },
            style: {
              width: "100%",
              height: "auto",
              borderRadius: "8px"
            }
          },
          {
            tipo: "div",
            class: "card-content",
            style: {
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%"
            },
            children: [
              {
                tipo: "section",
                class: "card-section",
                style: {
                  background: "grey",
                  width: "100%",
                  padding: "10px",
                  boxSizing: "border-box",
                  borderRadius: "4px",
                  marginBottom: "10px"
                },
                textContent: "Seção 1 do Card"
              }
            ]
          }
        ]
      },
      {
        tipo: "div",
        class: "card-footer",
        style: {
          backgroundColor: "#f7f7f7",
          padding: "10px 20px",
          borderTop: "1px solid #ccc",
          textAlign: "center",
          fontSize: "14px"
        },
        textContent: "Rodapé do Card"
      }
    ]
  }
};


function Card() {
  const { card } = dadosCard;
  return fabricar.criarContainer(card);
}

export default function fabricaCard(cardData, inicializarPagina, removeMain) {
  let imagemSrc;
  const card = document.createElement('div');
  card.classList.add('card');
  if (navigator.connection) {
    const rede = navigator.connection.effectiveType;
    if (rede == '4g') {
      if (cardData.imagem) {
        card.addEventListener('click', () => abrirConteudoCompleto(cardData, inicializarPagina, removeMain));
        imagemSrc = fabricar.criarImagem(cardData.imagem);
      } else {
        card.addEventListener('click', () => {
          window.open(cardData.link, '_blank');
        });
        imagemSrc = fabricar.criarImagem(cardData.imagens);
      }
    } else {
      imagemSrc = fabricar.criarImagem("img/padrao.webp");
    }
  }

  const header = document.createElement('h2');
  header.classList.add('card-header');
  header.textContent = cardData.titulo;
  card.appendChild(header);
  imagemSrc.style = 'width:70%; margin-left:10%';
  card.appendChild(imagemSrc);
  const description = document.createElement('p');
  description.classList.add('card-body');
  description.textContent = cardData.descricao;
  card.appendChild(description);

  return card;
}

function abrirConteudoCompleto(cardData, inicializarPagina, removeMain) {
  removeMain();
  const main = document.createElement('main');
  main.classList.add('conteudo-completo');
  
  const title = document.createElement('h1');
  title.textContent = cardData.titulo;
  main.appendChild(title);

  const image = document.createElement('img');
  image.src = cardData.imagem;
  main.appendChild(image);

  const content = document.createElement('div');
  content.innerHTML = cardData.conteudo;
  main.appendChild(content);

  const backButton = document.createElement('button');
  backButton.textContent = 'Voltar';
  backButton.style.position ='fixed'
  backButton.style.top ='10px'
  backButton.style.right ='5px'
  backButton.addEventListener('click', inicializarPagina);
  main.appendChild(backButton);
  const scriptTag = document.querySelector("script[src='assets/js/App.js']");
  document.body.insertBefore(main, scriptTag);
  document.documentElement.scrollTop = 0;
  
  
}


