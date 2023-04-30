const listWithItemClass = document.querySelectorAll(".item");

// ------1------------------------

console.log("Number of categories: ", listWithItemClass.length);

// ------2---------------------------

listWithItemClass.forEach((el) => {
  const child = el.lastElementChild;
  console.log(
    "Category:",
    el.children[0].textContent,
    "\n",
    "Elements:",
    child.children.length
  );
});
