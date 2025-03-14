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
    pagination: {
      el: ".swiper-our-product .swiper-pagination",
      type: "progressbar",
    },
  });
}

function footer() {
  const footerElement = document.querySelector("footer");
  const footerTop = document.querySelector(".footer-top");
  const footerTopHeight = footerTop.offsetHeight;
  const footerOvl = document.querySelector(".footer-ovl");

  gsap.to("footer", {
    scrollTrigger: {
      trigger: "footer",
      start: "top top",
      end: () => `+=${footerTopHeight * 2}`,
      scrub: 1,
      pin: true,
      // markers: true,
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress >= 0.6) {
          footerElement.classList.add("done");
        } else {
          footerElement.classList.remove("done");
        }
      },
    },
  });

  gsap.fromTo(
    footerOvl,
    {
      transform: "skewY(-30deg) translateY(-180%)",
    },
    {
      transform: "skewY(-30deg) translateY(100%)",
      scrollTrigger: {
        trigger: "footer",
        start: "top top",
        end: () => `+=${footerTopHeight * 2}`,
        scrub: 1,
        // markers: { startColor: "green", endColor: "red" }
      },
      ease: "none",
    }
  );

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
}

const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  footer();
};
preloadImages("img").then(() => {
  // Once images are preloaded, remove the 'loading' indicator/class from the body
  ourProduct();
  init();
});
$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});
