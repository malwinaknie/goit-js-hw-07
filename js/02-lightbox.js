import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((picture) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
  <a class="gallery__link" href="${picture.original}">
    <img
      class="gallery__image"
      src="${picture.preview}"
      alt="${picture.description}"
    />
  </a>
</div>`
  );
});

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
