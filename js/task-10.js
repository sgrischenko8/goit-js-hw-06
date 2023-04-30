function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.getElementById("boxes");
const input = document.querySelector("input");

const createBoxes = (amount) => {
  amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    newBox.style.backgroundColor = `${getRandomHexColor()}`;
    box.append(newBox);
  }
};

const destroyBoxes = () => {
  box.innerHTML = "";
};

const createBtn = document.querySelector("[data-create]");
createBtn.addEventListener("click", createBoxes);

const destroyBtn = document.querySelector("[data-destroy]");
destroyBtn.addEventListener("click", destroyBoxes);
