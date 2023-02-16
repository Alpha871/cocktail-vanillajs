import fetchDrink from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const presentDrink = async () => {
  const id = localStorage.getItem("drink");
  if (!id) {
    window.location.replace("index.html");
  }
  const data = await fetchDrink(`${url}${id}`);
  displayDrink(data);
};

presentDrink();
