//Criação do Component
class TituloDinamico extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    //Base do Component
    const ComponentRoot = document.createElement("h1");
    ComponentRoot.textContent = "Component Estilizado";

    //Estilizar Component
    const style = document.createElement("style");
    style.textContent = `
        h1{ 
            color: red;
          }
    `;

    //Enviar para a shadow
    shadow.appendChild(ComponentRoot);
    shadow.appendChild(style);
  }
}

customElements.define("titulo-dinamico", TituloDinamico);
