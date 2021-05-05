import galleryArray from "./gallery-items.js";

// var i = 0;
const markUp = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};
const createMarkUp = galleryArray.map((img) => markUp(img)).join("");
const container = document.querySelector(".gallery");
container.insertAdjacentHTML("afterbegin", createMarkUp);

const closeButton = document.querySelector(".lightbox__button");
const popUp = document.querySelector(".js-lightbox");
const backDrop = document.querySelector(".lightbox__overlay");
const lightBoxImage = document.querySelector(".lightbox__image");
const openLink = document.querySelector(".js-gallery");
openLink.addEventListener("click", (e) => {
  e.preventDefault();
  const imgOriginal = e.target.dataset.source;
  const imgDescription = e.target.getAttribute("alt");
  lightBoxImage.setAttribute("src", imgOriginal);
  lightBoxImage.setAttribute("alt", imgDescription);
  popUp.classList.add("is-open");
  document.addEventListener("keydown", listener, false);
});

function listener(e) {
  if (e.key === "Escape") {
    closePopUp();
  }
}

const closePopUp = () => {
  popUp.classList.remove("is-open");
  lightBoxImage.removeAttribute("src", "");
  lightBoxImage.removeAttribute("alt", "");
  document.removeEventListener("keydown", listener, false);
};
closeButton.addEventListener("click", closePopUp);
backDrop.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closePopUp();
  }
});
