const burguer_btn = document.querySelector("svg.burguer-menu");
const closer_menu = document.querySelector("svg.close-menu");

// Evento click en burguer-menu para mostrar el menu
burguer_btn.addEventListener("click", () => {
  const nav = document.querySelector("nav.nav");
  nav.style.left = "0";
});
// Evento click en el boton para cerrar el menu
closer_menu.addEventListener("click", () => {
  const nav = document.querySelector("nav.nav");
  nav.style.left = "-100%";
});
