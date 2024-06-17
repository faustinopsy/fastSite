import * as fabricar from "../../core/Fabrica.js";
import dadosCard from "../componentes/CardComponentes.js";

function Card() {
  const { card } = dadosCard;
  return fabricar.criarContainer(card);
}
export default function fabricaCard(cardData) {
  let imagemSrc;
  if(cardData.imagem){
     imagemSrc = fabricar.criarImagem(cardData.imagem);
  }else{
     imagemSrc = fabricar.criarImagem(cardData.imagens);
  }
  
  const card = document.createElement('div');
  card.classList.add('card');
  const header = document.createElement('h2');
  header.classList.add('card-header')
  header.textContent = cardData.titulo;
  card.appendChild(header);
  imagemSrc.style = 'width:70%; margin-left:10%'
  card.appendChild(imagemSrc);
  const description = document.createElement('p');
  description.classList.add('card-body')
  description.textContent = cardData.descricao;
  card.appendChild(description);
  
  return card;
}
