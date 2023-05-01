const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const user = {
      email,
      password,
    };
    user.email = email.value;
    user.password = password.value;
    console.log(user);
    event.currentTarget.reset();
  }
}
