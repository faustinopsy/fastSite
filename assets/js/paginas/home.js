import * as metaHome from "./headmeta/metahome.js";
import * as fabricar from "../core/Fabrica.js";
import dadosPagina from "./componentes/HomeComponentes.js";
import { fabricaImagem } from "./componentes/ImagemComponente.js";
import fabricaCard from "./cards/fabricaCard.js";

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
  export  function metaTagsSobre() {
    metaHome()
}
