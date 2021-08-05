const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuLinks = document.getElementsByClassName("menu")[0];
toggleButton.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});