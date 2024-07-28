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

  closeOnScroll(nav);
}

function closeOnScroll(nav) {
  window.addEventListener(`scroll`, () => {
    nav.classList.remove(`nav--active`);
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

    img.onclick = () => {
      showImg(i);
    };

    galleryGrid.appendChild(img);
  }
}

function showImg(index) {
  const img = document.createElement(`picture`);
  img.classList.add(`lightbox__picture`);
  img.innerHTML = `
     <source srcset="./assets/img/gallery/${index}.avif" type="avif" />
     <source srcset="./assets/img/gallery/${index}.webp" type="webp" />
     <img 
        class="lightbox__img"
        loading="lazy"
        width="200"
        height="300"
        src="./assets/img/gallery/${index}.jpg"
        alt="imagen-galeria"
      />`;

  // Crear el lightbox
  const lightbox = document.createElement(`div`);
  lightbox.classList.add(`lightbox`);
  lightbox.onclick = closeLightbox;

  // Crear el botón para cerrar el lightbox
  const closeBtn = document.createElement(`button`);
  closeBtn.textContent = `X`;
  closeBtn.classList.add(`lightbox__btn`);
  closeBtn.onclick = closeLightbox;

  // Añadir imagen y boton al HTML
  lightbox.appendChild(img);
  lightbox.appendChild(closeBtn);

  // Añadir lightbox al HTML
  const body = document.querySelector(`body`);
  body.classList.add(`overflow-hidden`);
  body.appendChild(lightbox);
}

function closeLightbox() {
  const lightbox = document.querySelector(`.lightbox`);
  lightbox.classList.add(`fade-out`);

  setTimeout(() => {
    lightbox?.remove();

    const body = document.querySelector(`body`);
    body.classList.remove(`overflow-hidden`);
  }, 300);
}
