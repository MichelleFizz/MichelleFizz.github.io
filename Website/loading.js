console.log("Page loaded");

const buttons = document.querySelectorAll("a.btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("You clicked a Pokéball!");
  });
});
