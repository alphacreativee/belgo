import { preloadImages } from "../libs/utils.js";
let lenis;
Splitting();

const init = () => {};
preloadImages("img").then(() => {
  // Once images are preloaded, remove the 'loading' indicator/class from the body

  init();
});
$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});
function drawCircles() {
  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".process__item");
    const totalItems = 10;
    const angleStep = 360 / totalItems;
    const startAngle = 123;

    // Lấy vòng tròn SVG
    const circle = document.querySelector(".progress-circle");
    const paths = document.querySelectorAll(".progress-path");
    const radiusDefault = 245; // Bán kính mặc định của SVG circle
    const circumference = 2 * Math.PI * radiusDefault; // Chu vi vòng tròn
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference; // Ban đầu ẩn toàn bộ

    items.forEach((item, index) => {
      const angleDeg = startAngle + index * angleStep;
      const dataIndex = parseInt(item.getAttribute("data-index")) || index;
      let radius = radiusDefault; // Giá trị mặc định
      if (dataIndex === 2) {
        radius = 290;
      } else if (dataIndex === 6) {
        radius = 270;
      }
      console.log(`Item ${index}: angle = ${angleDeg}deg`);

      // Định vị item
      item.style.opacity = "0";
      item.style.left = "50%";
      item.style.top = "50%";
      item.style.transform = `translate(-50%, -50%) 
                                rotate(${angleDeg}deg) 
                                translate(${radius}px, 0) 
                                rotate(${-angleDeg}deg)`;

      // Hiển thị item và vẽ vòng tròn
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transition = "opacity 0.5s ease";

        // Tính đoạn cung tròn cần vẽ đến item hiện tại
        const progress = (index + 1) / totalItems; // Tỷ lệ hoàn thành (0 -> 1)
        const offset = circumference * (1 - progress); // Giảm offset để vẽ
        circle.style.transition = "stroke-dashoffset 1.2s ease";
        circle.style.strokeDashoffset = offset;
        // Vẽ path nếu data-index khớp
        paths.forEach((path) => {
          const pathIndex = parseInt(path.getAttribute("data-index"));
          if (pathIndex === dataIndex) {
            path.style.opacity = "1";
            path.style.transition = "stroke-dashoffset 1s ease";
            path.style.strokeDashoffset = "0"; // Vẽ toàn bộ path
          }
        });
      }, index * 400);
    });
  });
}

drawCircles();
