document.addEventListener(`DOMContentLoaded`, startApp);

function startApp() {
  openCloseNav();
  colorHeaderScroll();
  createGallery();
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

function createGallery() {
  const galleryGrid = document.querySelector(`.gallery__grid`);

  for (let i = 1; i <= 8; i++) {
    const img = document.createElement(`picture`);
    img.classList.add(`gallery__picture`);
    img.innerHTML = `
       <source srcset="./assets/img/gallery/${i}.avif" type="avif" />
       <source srcset="./assets/img/gallery/${i}.webp" type="webp" />
       <img 
          class="gallery__img"
          loading="lazy"
          width="200"
          height="300"
          src="./assets/img/gallery/${i}.jpg"
          alt="imagen-galeria"
        />`;

    img.addEventListener(`click`, showImg(i));

    galleryGrid.appendChild(img);
  }
}



function showImg(index) {
  
}