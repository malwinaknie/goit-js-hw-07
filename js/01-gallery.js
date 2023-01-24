import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

galleryItems.forEach((picture) => {
  gallery.insertAdjacentHTML(
    'beforeend',
   `<div class="gallery__item">
  <a class="gallery__link" href="${picture.original}">
    <img
      class="gallery__image"
      src="${picture.preview}"
      data-source="${picture.original}"
      alt="${picture.description}"
    />
  </a>
</div>`
  );
});

gallery.addEventListener("click", imageModal);

function imageModal(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  evt.preventDefault();
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
      `);

  instance.show();

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') {
      instance.close();
    }
  })
}