import { toggle, swiper } from "./utilities.js";

swiper.init();

document.addEventListener("click", (e) => {
  return toggle(e);
});
