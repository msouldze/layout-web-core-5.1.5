const shownButtonElement = document.querySelector(".show");
const hiddenButtonElement = document.querySelector(".hide");
const swiperElement = document.querySelector(".swiper");
const wrapperElement = document.querySelector(".swiper-wrapper");

const isClassContained = (target, className) => {
  return target.classList.contains(className);
};

const toggleContent = (className) => {
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

export const toggle = (e) => {
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
}

export const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "true",
  },
  breakpoints : {
    320: {
      slidesPerView: 'auto',
    },
  }
});