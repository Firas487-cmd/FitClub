const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuIcon.classList.toggle("bx-x");
});

document.querySelectorAll(".navbar a, .nav-btn").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuIcon.classList.remove("bx-x");
  });
});
