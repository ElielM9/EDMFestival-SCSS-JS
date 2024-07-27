document.addEventListener(`DOMContentLoaded`, startApp);

function startApp() {
  openCloseNav();
}

// Funciones
function openCloseNav() {
  const nav = document.querySelector(`.nav`);
  const hamburguerBtn = document.querySelector(`.hamburguer-btn`);

  hamburguerBtn.addEventListener(`click`, () => {
    nav.classList.toggle(`nav--active`);
  });
}
