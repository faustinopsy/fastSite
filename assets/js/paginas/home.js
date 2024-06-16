import * as metaHome from "./headmeta/metahome.js";
import * as fabricar from "../core/Fabrica.js";
import dadosPagina from "./componentes/HomeComponentes.js";

export async function fabricaHome(){
    const { article,aside,estiloPadrao,imagem,main,section1,section2 } = dadosPagina;
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
  export  function metaTagsSobre() {
    metaHome()
}
