import { galleryItems } from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", () => {
  const galleryEl = document.querySelector(".gallery");
  const element = createElement(galleryItems);

  galleryEl.insertAdjacentHTML("beforeend", element);

  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionsData: "alt",
  });

  console.log(lightbox);
  function createElement(galleryItems) {
    const arrayPhoto = galleryItems
      .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
                             <a class="gallery__link" href="${original}">
                                <img class="gallery__image" src="${preview}" alt="${description}" />
                             </a>
                          </li>`;
      })
      .join("");
    return arrayPhoto;
  }
});
