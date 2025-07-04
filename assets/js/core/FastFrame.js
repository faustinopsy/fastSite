export default class FastFrame {
  constructor(objeto) {
    this.objeto = objeto;

    if (!this.objeto.tipo) {
      console.error("O tipo do elemento é obrigatório!");
      return null;
    }
    this.novoElemento = document.createElement(this.objeto.tipo);
  }

  adicionarPropriedades() {
    for (const propriedade in this.objeto) {
      if (
        propriedade !== "tipo" &&
        propriedade !== "eventos" &&
        propriedade !== "textContent" &&
        propriedade !== "style" &&
        propriedade !== "hover" &&
        propriedade !== "children" &&
        propriedade !== "atributos"
      ) {
        this.novoElemento.setAttribute(propriedade, this.objeto[propriedade]);
      }
    }
  }

  adicionarAtributos() {
    if (this.objeto.atributos) {
      for (const atributo in this.objeto.atributos) {
        this.novoElemento.setAttribute(atributo, this.objeto.atributos[atributo]);
      }
    }
  }

  adicionarTexto() {
    if (this.objeto.textContent) {
      this.novoElemento.textContent = this.objeto.textContent;
    }
  }

  adicionarEventos() {
    if (this.objeto.eventos) {
      for (const evento in this.objeto.eventos) {
        if (this.objeto.eventos[evento]) {
          this.novoElemento.addEventListener(evento, this.objeto.eventos[evento]);
        } else {
          console.log(`Evento ${this.objeto.eventos[evento]} não encontrado`);
        }
      }
    }
    if (this.objeto.hover) {
      this.novoElemento.addEventListener("mouseover", () => {
        this.novoElemento.style.backgroundColor = this.objeto.hover.colorin;
      });

      this.novoElemento.addEventListener("mouseout", () => {
        this.novoElemento.style.backgroundColor = this.objeto.hover.colorout;
      });
    }
  }
  adicionarEstilo() {
    if (this.objeto.style) {
      let css = "";
      for (const propriedade in this.objeto.style) {
        css += `${propriedade}: ${this.objeto.style[propriedade]}; `;
      }
      this.novoElemento.setAttribute("style", css);
    }
  }
  gerarElemento() {
    this.adicionarPropriedades();
    this.adicionarAtributos();
    this.adicionarTexto();
    this.adicionarEventos();
    this.adicionarEstilo();
    if (this.objeto.children) {
      this.objeto.children.forEach(child => {
        const childElement = new FastFrame(child).gerarElemento();
        this.novoElemento.appendChild(childElement);
      });
    }

    return this.novoElemento;
  }
}
