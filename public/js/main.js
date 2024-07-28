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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYERPTUNvbnRlbnRMb2FkZWRgLCBzdGFydEFwcCk7XG5cbmZ1bmN0aW9uIHN0YXJ0QXBwKCkge1xuICBvcGVuQ2xvc2VOYXYoKTtcbiAgY29sb3JIZWFkZXJTY3JvbGwoKTtcbiAgY3JlYXRlR2FsbGVyeSgpO1xufVxuXG4vLyBGdW5jaW9uZXNcbmZ1bmN0aW9uIG9wZW5DbG9zZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5hdmApO1xuICBjb25zdCBoYW1idXJndWVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhhbWJ1cmd1ZXItYnRuYCk7XG5cbiAgaGFtYnVyZ3VlckJ0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShgbmF2LS1hY3RpdmVgKTtcbiAgfSk7XG5cbiAgY2xvc2VPblNjcm9sbChuYXYpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU9uU2Nyb2xsKG5hdikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihgc2Nyb2xsYCwgKCkgPT4ge1xuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKGBuYXYtLWFjdGl2ZWApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29sb3JIZWFkZXJTY3JvbGwoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oZWFkZXJgKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihgc2Nyb2xsYCwgKCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFBvc1kgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKGBoZWFkZXItLWJnYCwgc2Nyb2xsUG9zWSA+IDEwMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5KCkge1xuICBjb25zdCBnYWxsZXJ5R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYWxsZXJ5X19ncmlkYCk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSsrKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgcGljdHVyZWApO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKGBnYWxsZXJ5X19waWN0dXJlYCk7XG4gICAgaW1nLmlubmVySFRNTCA9IGBcbiAgICAgICA8c291cmNlIHNyY3NldD1cIi4vYXNzZXRzL2ltZy9nYWxsZXJ5LyR7aX0uYXZpZlwiIHR5cGU9XCJhdmlmXCIgLz5cbiAgICAgICA8c291cmNlIHNyY3NldD1cIi4vYXNzZXRzL2ltZy9nYWxsZXJ5LyR7aX0ud2VicFwiIHR5cGU9XCJ3ZWJwXCIgLz5cbiAgICAgICA8aW1nIFxuICAgICAgICAgIGNsYXNzPVwiZ2FsbGVyeV9faW1nXCJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgIGhlaWdodD1cIjMwMFwiXG4gICAgICAgICAgc3JjPVwiLi9hc3NldHMvaW1nL2dhbGxlcnkvJHtpfS5qcGdcIlxuICAgICAgICAgIGFsdD1cImltYWdlbi1nYWxlcmlhXCJcbiAgICAgICAgLz5gO1xuXG4gICAgaW1nLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBzaG93SW1nKGkpO1xuICAgIH07XG5cbiAgICBnYWxsZXJ5R3JpZC5hcHBlbmRDaGlsZChpbWcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dJbWcoaW5kZXgpIHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgcGljdHVyZWApO1xuICBpbWcuY2xhc3NMaXN0LmFkZChgbGlnaHRib3hfX3BpY3R1cmVgKTtcbiAgaW1nLmlubmVySFRNTCA9IGBcbiAgICAgPHNvdXJjZSBzcmNzZXQ9XCIuL2Fzc2V0cy9pbWcvZ2FsbGVyeS8ke2luZGV4fS5hdmlmXCIgdHlwZT1cImF2aWZcIiAvPlxuICAgICA8c291cmNlIHNyY3NldD1cIi4vYXNzZXRzL2ltZy9nYWxsZXJ5LyR7aW5kZXh9LndlYnBcIiB0eXBlPVwid2VicFwiIC8+XG4gICAgIDxpbWcgXG4gICAgICAgIGNsYXNzPVwibGlnaHRib3hfX2ltZ1wiXG4gICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICBoZWlnaHQ9XCIzMDBcIlxuICAgICAgICBzcmM9XCIuL2Fzc2V0cy9pbWcvZ2FsbGVyeS8ke2luZGV4fS5qcGdcIlxuICAgICAgICBhbHQ9XCJpbWFnZW4tZ2FsZXJpYVwiXG4gICAgICAvPmA7XG5cbiAgLy8gQ3JlYXIgZWwgbGlnaHRib3hcbiAgY29uc3QgbGlnaHRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgbGlnaHRib3guY2xhc3NMaXN0LmFkZChgbGlnaHRib3hgKTtcbiAgbGlnaHRib3gub25jbGljayA9IGNsb3NlTGlnaHRib3g7XG5cbiAgLy8gQ3JlYXIgZWwgYm90w7NuIHBhcmEgY2VycmFyIGVsIGxpZ2h0Ym94XG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYnV0dG9uYCk7XG4gIGNsb3NlQnRuLnRleHRDb250ZW50ID0gYFhgO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKGBsaWdodGJveF9fYnRuYCk7XG4gIGNsb3NlQnRuLm9uY2xpY2sgPSBjbG9zZUxpZ2h0Ym94O1xuXG4gIC8vIEHDsWFkaXIgaW1hZ2VuIHkgYm90b24gYWwgSFRNTFxuICBsaWdodGJveC5hcHBlbmRDaGlsZChpbWcpO1xuICBsaWdodGJveC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgLy8gQcOxYWRpciBsaWdodGJveCBhbCBIVE1MXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBib2R5YCk7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZChgb3ZlcmZsb3ctaGlkZGVuYCk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobGlnaHRib3gpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUxpZ2h0Ym94KCkge1xuICBjb25zdCBsaWdodGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saWdodGJveGApO1xuICBsaWdodGJveC5jbGFzc0xpc3QuYWRkKGBmYWRlLW91dGApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGxpZ2h0Ym94Py5yZW1vdmUoKTtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBib2R5YCk7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKGBvdmVyZmxvdy1oaWRkZW5gKTtcbiAgfSwgMzAwKTtcbn1cbiJdLCJmaWxlIjoibWFpbi5qcyJ9
