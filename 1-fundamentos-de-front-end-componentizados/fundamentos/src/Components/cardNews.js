class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
    //shadow.innerHTML = "<h1>Construindo um Component de Maneira profissional</h1>";
  }

  //metodo
  build() {
    const ComponentRoot = document.createElement("div");
    ComponentRoot.setAttribute("class", "card");
//---------------------------------------------------------------------------------------------------

    const card__left = document.createElement("div");
    card__left.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    const linkTitle = document.createElement("a");
    const newsContent = document.createElement("p");
    card__left.appendChild(autor)
    card__left.appendChild(linkTitle)
    card__left.appendChild(newsContent)
//---------------------------------------------------------------------------------------------------
    const card__rigth = document.createElement("div");
    card__rigth.setAttribute("class", "card__rigth");
    
    const newsImage = document.createElement("img")
    card__rigth.appendChild(newsImage)
//---------------------------------------------------------------------------------------------------

    ComponentRoot.appendChild(card__left);
    ComponentRoot.appendChild(card__rigth);

    return ComponentRoot;
  }
  //metodo
  styles() {}
}

customElements.define("card-news", Cardnews);
