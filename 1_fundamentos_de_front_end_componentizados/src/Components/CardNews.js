class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__Left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href  = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content")
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__Right");
    const newsImage = document.createElement("img");
    newsImage.src= this.getAttribute("photo") || "assets/img/default.jpg";
    newsImage.alt="Foto da notícia";
    cardRight.appendChild(newsImage);


    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }
  styles() {
    const style = document.createElement("style");
    style.textContent = `
.card {
  width: 100%;
  display: flex;
  box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
  justify-content: space-between;
}

.card__Left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
}
.card__Left > span {
  font-weight: 400;
}
.card__Left > a {
  margin-top: 15px;
  font-size: 25px;
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.card__Left > p {
  color: rgb(70, 70, 70);
}
    `;

    return style;
  }
}
customElements.define("card-news", CardNews);
