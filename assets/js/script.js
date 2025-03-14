import { preloadImages } from "../libs/utils.js";
let lenis;
Splitting();
function ourProduct() {
  if (!document.querySelector(".our-product")) {
    return;
  }
  var swiperProduct = new Swiper(".swiper-our-product", {
    slidesPerView: "auto",
    speed: 600,
  });
}

const init = () => {};
preloadImages("img").then(() => {
  // Once images are preloaded, remove the 'loading' indicator/class from the body
  ourProduct();
  init();
});
$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});
