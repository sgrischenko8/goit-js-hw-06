const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.dataset.length == textInput.value.length) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else if (textInput.value.length === 0) {
    textInput.classList.remove("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
