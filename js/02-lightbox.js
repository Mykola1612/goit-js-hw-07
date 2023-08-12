import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const element = createElement(galleryItems);

gallery.insertAdjacentHTML("beforeend", element);

function createElement(galleryItems) {
  const arrayPhoto = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original} ">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
    })
    .join("");
  return arrayPhoto;
}

gallery.addEventListener("click", onPhotoGalleryClick);

function onPhotoGalleryClick(e) {
  e.preventDefault();
  const targetPhoto = e.target.classList.contains("gallery__image");
  if (!targetPhoto) {
    return;
  }
  console.log(e.currentTarget.classList.contains("gallery__link"));
}
