const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

list.innerHTML = markup;
