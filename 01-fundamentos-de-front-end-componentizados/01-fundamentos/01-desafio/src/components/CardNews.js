class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "container");

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    cardLeft.appendChild(autor);
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    cardLeft.appendChild(linkTitle);
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    cardLeft.appendChild(newsContent);
    newsContent.textContent = this.getAttribute("newsContent");

    const cardRigth = document.createElement("div");
    cardRigth.setAttribute("class", "card__right");
    const newsImage = document.createElement("img");
    cardRigth.appendChild(newsImage);
    newsImage.src = this.getAttribute("photo") || "assets/img/default.jpg";
    newsImage.alt = "Foto da notícia";

    componentRoot.appendChild(card);
    card.appendChild(cardLeft);
    card.appendChild(cardRigth);

    return componentRoot;
  }
  style() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 15px;
  margin-left: 10px;
}
.card__left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
.card__left > span {
  font-weight: 400;
}
.card__left > a {
  margin-top: 15px;
  font-size: 25px;
  text-decoration: none;
  font-weight: bold;
}
.card__left > p {
  color: gray;
}
.card__right > img {
  display: flex;
  width: 200px;
  height: 100%;
  border-radius: 0 10px 10px 0;
    `;

    return style;
  }
}
customElements.define("card-news", Cardnews);
