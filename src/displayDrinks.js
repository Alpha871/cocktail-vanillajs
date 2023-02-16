import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const title = get(".title");
const section = get(".section-center");

const displayDrinks = ({ drinks }) => {
  if (!drinks) {
    hideLoading();
    title.textContent = "Sorry no cocktail matched your seach";
    section.innerHTML = null;
    return;
  }

  const drinkHtml = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `
        <a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>
  `;
    })
    .join("");
  hideLoading();
  title.textContent = "";
  section.innerHTML = drinkHtml;
  return section;
};

export default displayDrinks;
