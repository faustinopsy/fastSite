import * as fabricar from "../core/Fabrica.js";
import dadosPagina from "./componentes/SobreComponentes.js";

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
  head.innerHTML =`<link rel="stylesheet" href="assets/css/styles.css">
  <link rel="stylesheet" href="assets/css/responsivo.css">`;
}
export async function fabricaSobre(data) {
  const { main, article, section1, section2, aside, imagem } = dadosPagina;
  const novomain = fabricar.criarContainer(main);

  const articleDadosPessoais = fabricar.criarContainer(article);
  const imagemSrc = fabricar.criarImagem(data.informacoesPessoais.fotoPerfil);
  const nome = fabricar.criarElementoTexto('h1', data.informacoesPessoais.dadosPessoais.nome);
  const linkedin = fabricar.criarLink(`https://linkedin.com/in${data.informacoesPessoais.dadosPessoais.linkedin}`, data.informacoesPessoais.dadosPessoais.linkedin);
  const email = fabricar.criarLink(`mailto:${data.informacoesPessoais.dadosPessoais.email}`, data.informacoesPessoais.dadosPessoais.email);

  articleDadosPessoais.appendChild(imagemSrc);
  articleDadosPessoais.appendChild(nome);
  articleDadosPessoais.appendChild(linkedin);
  articleDadosPessoais.appendChild(email);
  novomain.appendChild(articleDadosPessoais);

  const sectionHabilidades = fabricar.criarContainer(section1);
  const tituloHabilidades = fabricar.criarElementoTexto('h2', 'Habilidades');
  sectionHabilidades.appendChild(tituloHabilidades);
  data.habilidades.forEach(habilidade => {
    const habilidadeElemento = fabricar.criarElementoTexto('p', `${habilidade.nome}: ${habilidade.descricao}`);
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
