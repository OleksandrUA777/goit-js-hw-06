const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listOfIngredients = document.querySelector("#ingredients");

const arrayOfIngredients = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");

  itemEl.textContent = ingredient;
  itemEl.classList.add("item");

  return itemEl;
});

listOfIngredients.append(...arrayOfIngredients);
