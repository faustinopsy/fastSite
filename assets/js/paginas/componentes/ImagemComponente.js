import * as fabricar from "../../core/Fabrica.js";
import dadosPagina from "./HomeComponentes.js";

export function fabricaImagem(){
    const { article,aside,estiloPadrao,imagem,main,section1,section2 } = dadosPagina;
    const imagemSrc = fabricar.criarContainer(imagem);
  
    return imagemSrc
    
  }
