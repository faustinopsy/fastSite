import Elemento from "./FastFrame.js";

export function criarContainer(elemento) {
  return new Elemento(elemento).gerarElemento();
}
export function criarSvg() {
  const div = criarContainer({tipo:'div'})
  div.innerHTML = `
  <svg class="menu-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 100 150 q 40 -70 0 -130" fill="#f7b500" stroke-width="0"></path>
  </svg>`;

return div
}

export function criarCard(elemento) {
  return new Elemento(elemento).gerarElemento();
}

export function criarBotao(elemento) {
  return new Elemento(elemento).gerarElemento();
}

export function criarForm(elemento) {
  return new Elemento(elemento).gerarElemento();
}

export function criarLabel(elemento) {
  return new Elemento(elemento).gerarElemento();
}

export function criarInput(elemento) {
  return new Elemento(elemento).gerarElemento();
}
export function criarImagem(src) {
  const img = document.createElement('img');
  img.src = src;
  return img;
}

export function criarElementoTexto(tag, texto) {
  const elemento = document.createElement(tag);
  elemento.innerHTML = texto;
  return elemento;
}

export function criarLink(href, texto) {
  const link = document.createElement('a');
  link.href = href;
  link.innerHTML = texto;
  return link;
}

export function criaTabela(dadosTabela) {
  if (!dadosTabela.th || !dadosTabela.td) {
    console.error("Parâmetros th e td obrigatórios para criar tabela!");
    return null;
  }

  const tabela = new Elemento({
    tipo: "table",
    id: dadosTabela.id || "tabela-dinamica",
    className: dadosTabela.className || "",
  });

  const thead = new Elemento({
    tipo: "thead",
  });

  const linhaCabecalho = new Elemento({
    tipo: "tr",
  });

  for (const coluna in dadosTabela.th) {
    const celulaCabecalho = new Elemento({
      tipo: "th",
      textContent: dadosTabela.th[coluna],
    });
    linhaCabecalho.novoElemento.appendChild(celulaCabecalho.gerarElemento());
  }

  thead.novoElemento.appendChild(linhaCabecalho.gerarElemento());
  tabela.novoElemento.appendChild(thead.gerarElemento());

  const tbody = new Elemento({
    tipo: "tbody",
  });

  dadosTabela.td.forEach((linha) => {
    const linhaTabela = new Elemento({
      tipo: "tr",
    });

      for (const propriedade in dadosTabela.td[0]) {
        const valorCelula = linha[propriedade];
        
        const celula = new Elemento({
          tipo: "td",
          textContent: valorCelula,
        });
        linhaTabela.novoElemento.appendChild(celula.gerarElemento());
      }
    

    tbody.novoElemento.appendChild(linhaTabela.gerarElemento());
  });
  if(dadosTabela.style){
    let css='';
    for(let style in dadosTabela.style){
      css += `${style} : ${dadosTabela.style[style]}; `
    }
    tabela.novoElemento.setAttribute("style", css)
  }  
  tabela.novoElemento.appendChild(tbody.gerarElemento());

  return tabela.gerarElemento();
}
