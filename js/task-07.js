const text = document.getElementById("text");
const input = document.getElementById("font-size-control");

const changeFontSize = () => {
  text.style.fontSize = `${input.value}px`;
};

input.addEventListener("input", changeFontSize);
