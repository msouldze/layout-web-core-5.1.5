import { isClassContained, toggleContent } from "./click.js";

const slidesElement = document.querySelectorAll(".swiper-slide");

const slidesLength = Array.from(slidesElement).length - 1;
const slidesVisible = 2;
const mainBullets = Math.ceil(slidesLength / slidesVisible);

// init Swiper:
const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "true",
    dynamicBullets: true,
    dynamicMainBullets: mainBullets,
  },
});

document.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  const { target } = e;

  if (target.tagName !== "BUTTON") {
    return;
  }
  if (isClassContained(target, "show")) {
    if (!isClassContained(target, "show")) {
      return;
    }
    return toggleContent("show");
  } else {
    if (!isClassContained(target, "hide")) {
      return;
    }
    return toggleContent("hide");
  }
});
