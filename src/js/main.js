document.addEventListener(`DOMContentLoaded`, startApp);

function startApp() {
  openCloseNav();
  colorHeaderScroll();
}

// Funciones
function openCloseNav() {
  const nav = document.querySelector(`.nav`);
  const hamburguerBtn = document.querySelector(`.hamburguer-btn`);

  hamburguerBtn.addEventListener(`click`, () => {
    nav.classList.toggle(`nav--active`);
  });
}

function colorHeaderScroll() {
  const header = document.querySelector(`.header`);

  window.addEventListener(`scroll`, () => {
    const scrollPosY = window.scrollY;

    header.classList.toggle(`header--bg`, scrollPosY > 100);
  });
}
