import { galleryItems } from "./gallery-items.js";

// Change code below this line
const gallery = document.querySelector(".gallery");
const create = createElementGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", create);

function createElementGallery(arrey) {
  const cards = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
  return cards;
}

gallery.addEventListener("click", onGalleryBigPhotoClick);

function onGalleryBigPhotoClick(e) {
  e.preventDefault();
  const isPhotoElement = e.target.classList.contains("gallery__image");

  if (!isPhotoElement) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}
