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
