import { toggle, swiper } from "./utilities.js";


const swiperElement = document.querySelector(".swiper");
const wrapperElement = document.querySelector(".swiper-wrapper");

swiper.init();

document.addEventListener("click", (e) => {
  return toggle(e);
});
