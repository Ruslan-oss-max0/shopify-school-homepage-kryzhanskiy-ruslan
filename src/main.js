import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./styles/styles.scss";

const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

