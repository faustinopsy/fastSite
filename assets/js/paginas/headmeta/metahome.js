import * as fabricar from "../../core/Fabrica.js";
const estiloPadrao = {
    border: '2px solid black',
    'box-sizing': 'border-box', 
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


export function metaHome() {
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