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
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    card__left.appendChild(autor);
    card__left.appendChild(linkTitle);
    card__left.appendChild(newsContent);
    //---------------------------------------------------------------------------------------------------
    const card__rigth = document.createElement("div");
    card__rigth.setAttribute("class", "card__rigth");

    const newsImage = document.createElement("img");
    newsImage.src =
      this.getAttribute("photo") || "assets/img/foto-default.avif";
    newsImage.alt = "Foto da Notícia";
    card__rigth.appendChild(newsImage);
    //---------------------------------------------------------------------------------------------------

    ComponentRoot.appendChild(card__left);
    ComponentRoot.appendChild(card__rigth);

    return ComponentRoot;
  }
  //metodo
  styles() {
    const style = document.createElement("style");
    style.textContent = `
    :root {
  --color: #343232;
}
* {
  font-family: "Segoe UI", sans-serif;
}
.card {
  width: 100%;
  display: flex;
  box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
  justify-content: space-between;
}
.card__left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
}
.card__left > span {
  font-weight: 400;
}
.card__left > a {
  margin-top: 15px;
  font-size: 25px;
  color: black;
  text-decoration: none;
  font-weight: bold;
}
.card__left > p {
  color: var(--color);
}
.card__rigth > img {
  width: 250px;
}

    
    `;

    return style;
  }
}

customElements.define("card-news", Cardnews);
