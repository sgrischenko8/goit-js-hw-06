function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const text = document.querySelector(".color");

const changeBackgroundColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = `-${body.style.backgroundColor}`;
};

btn.addEventListener("click", changeBackgroundColor);
