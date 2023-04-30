let counterValue = 0;

const value = document.getElementById("value");

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
