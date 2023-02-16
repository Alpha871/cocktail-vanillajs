import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrink = (setDrink) => {
  hideLoading();
  console.log(setDrink);
  const drink = setDrink.drinks[0];
  const { strDrink: name, strInstructions: desc, strDrinkThumb: image } = drink;
  const ingredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
  ];

  const drinkname = get(".drink-name");
  const drinkDesc = get(".drink-desc");
  const ingredient = get(".drink-ingredients");
  const img = get(".drink-img");

  img.src = image;
  document.title = name;
  drinkname.textContent = name;
  drinkDesc.textContent = desc;
  ingredient.innerHTML = ingredients
    .map((item) => {
      if (!item) return;
      return `
        <li><i class="far fa-check-square"></i>${item}</li>
    `;
    })
    .join("");
};

export default displayDrink;
