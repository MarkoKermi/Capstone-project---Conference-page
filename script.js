// menu bar
const bar = document.querySelector(".fa-bars");
const logo = document.querySelector(".logo");
const menu_button = document.querySelector(".menu_button");

bar.addEventListener("click", () => {
  bar.classList.toggle("fa-xmark");
  if (menu_button.style.display === "block") {
    menu_button.style.display = "none";
    // logo.style.display = "block";
  } else {
    menu_button.style.display = "block";
    // logo.style.display = "none";
  }
});

menu_button.addEventListener("click", () => {
  bar.classList.toggle("fa-xmark");
  if (menu_button.style.display === "block") {
    menu_button.style.display = "none";
    // logo.style.display = "block";
  } else {
    menu_button.style.display = "block";
    // logo.style.display = "none";
  }
});
