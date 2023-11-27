const shownButtonElement = document.querySelector(".show");
const hiddenButtonElement = document.querySelector(".hide");
const swiperElement = document.querySelector(".swiper");
const wrapperElement = document.querySelector(".swiper-wrapper");

export const isClassContained = (target, className) => {
  return target.classList.contains(className);
};

export const toggleContent = (className) => {
  const margin = 46;
  const wrapperHeight = wrapperElement.scrollHeight;

  if (className === "show") {
    shownButtonElement.style.display = "none";
    hiddenButtonElement.style.display = "block";
    swiperElement.style.height = wrapperHeight + margin + "px";
  } else {
    shownButtonElement.style.display = "block";
    hiddenButtonElement.style.display = "none";
    swiperElement.style.height = null;
  }
}