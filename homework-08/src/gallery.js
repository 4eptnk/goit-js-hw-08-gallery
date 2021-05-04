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
      src="${original}"
      data-source="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
};

const createMarkUp = galleryArray.map((img) => markUp(img)).join("");
const theSpisok = document.querySelector(".gallery");
theSpisok.insertAdjacentHTML("afterbegin", createMarkUp);

const closeButton = document.querySelector(".lightbox__button");
const popUp = document.querySelector(".js-lightbox");
const backDrop = document.querySelector(".lightbox__overlay");
const lightBoxImage = document.querySelector(".lightbox__image");
const openLink = document.querySelectorAll(".gallery__link").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    // e.currentTarget.classList.toggle("active");
    const imgOriginal = e.currentTarget.getAttribute("href");
    const imgDescription = e.target.getAttribute("alt");
    lightBoxImage.setAttribute("src", imgOriginal);
    lightBoxImage.setAttribute("alt", imgDescription);
    popUp.classList.toggle("is-open");
  });
});

const closePopUp = () => {
  popUp.classList.remove("is-open");
  lightBoxImage.removeAttribute("src", "");
  lightBoxImage.removeAttribute("alt", "");
};
const togglePopUp = () => popUp.classList.toggle("is-open");
closeButton.addEventListener("click", closePopUp);
backDrop.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closePopUp();
  }
});

// const movePopUp = () => {};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopUp();
  }
  //   if (e.key === "ArrowLeft") {
  //     const active = document.querySelector(".active");
  //     movePopUp();
  //     console.log(active);
  //   }
  //   if (e.key === "ArrowRight") {
  //     movePopUp();
  //   }
});
