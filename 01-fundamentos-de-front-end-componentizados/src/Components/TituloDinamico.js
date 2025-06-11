class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    //base do Component
    const ComponentRoot = document.createElement("h1");
    ComponentRoot.textContent = this.getAttribute("titulo");

    //estilizar Component
    const style = document.createElement("style");
    style.textContent = `
        h1{
            color: red;
        }
    `;
    //enviar para a shadow
    shadow.appendChild(ComponentRoot);
    shadow.appendChild(style);
  }
}

customElements.define("titulo-dinamico", TituloDinamico);
