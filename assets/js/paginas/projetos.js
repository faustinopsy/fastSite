import * as metaProjeto from "./headmeta/metaprojeto.js";
import * as fabricar from "../core/Fabrica.js";
import dadosPagina from "./componentes/HomeComponentes.js";
import { fabricaImagem } from "./componentes/ImagemComponente.js";
import fabricaCard from "./cards/fabricaCard.js";

export async function fabricaProjetos(){
    const { article,aside,estiloPadrao,imagem,main,section1,section2 } = dadosPagina;
    const novomain = fabricar.criarContainer(main);
    novomain.appendChild(fabricaCard())
    novomain.appendChild(fabricaCard())
    novomain.appendChild(fabricaCard())
    novomain.appendChild(fabricaCard())
    novomain.appendChild(fabricaCard())
    novomain.appendChild(fabricaCard())
    return novomain
    
  }
  export  function metaTagsProjeto() {
    metaProjeto()
}
