import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/styles.scss";

const heroSlider = new Swiper(".hero__slider", {
  modules: [Pagination],
  loop: true,

  pagination: {
    el: ".hero__slider-pagination",
    clickable: true,
  },
});

const futureCollectionSlider = new Swiper(".featured-collection__slider", {
  modules: [Navigation],
  slidesPerView: 1.1,
  spaceBetween: 16,

  navigation: {
    nextEl: ".featured-collection__slider-button--next",
    prevEl: ".featured-collection__slider-button--prev",
    enabled: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 24,
      navigation: { enabled: true },
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
      navigation: { enabled: true },
    },
  },
});

document.querySelectorAll(".faq__item").forEach((item) => {
  const question = item.querySelector(".faq__question");
  const toggle = item.querySelector(".faq__toggle");
  const answer = item.querySelector(".faq__answer");

  question.addEventListener("click", () => {
    answer.classList.toggle("active");
    toggle.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const colorButtons = document.querySelectorAll(".product__to-choose-item");
  const variants = document.querySelectorAll(".product__variant");

  colorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedColor = btn.dataset.color;

      colorButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      variants.forEach((variant) => {
        if (variant.dataset.color === selectedColor) {
          variant.classList.add("active");

          const mainImg = variant.querySelector(".highly-rated__main");
          const firstThumb = variant.querySelector(".product__item");
          if (firstThumb) {
            mainImg.src = firstThumb.src;
            variant
              .querySelectorAll(".product__item")
              .forEach((t) => t.classList.remove("active"));
            firstThumb.classList.add("active");
          }
        } else {
          variant.classList.remove("active");
        }
      });
    });
  });

  variants.forEach((variant) => {
    const mainImg = variant.querySelector(".highly-rated__main");
    const thumbs = variant.querySelectorAll(".product__item");

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        mainImg.src = thumb.src;

        thumbs.forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
      });
    });
  });

  document.querySelectorAll(".product__thumbs").forEach((thumbsBlock) => {
    new Swiper(thumbsBlock, {
      slidesPerView: 4,
      spaceBetween: 16,
      breakpoints: {
        320: { slidesPerView: 3, spaceBetween: 16 },
        768: { slidesPerView: 4, spaceBetween: 16 },
        1024: { slidesPerView: 5, spaceBetween: 16 },
      },
    });
  });
});
