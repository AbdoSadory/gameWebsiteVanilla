// for react https://codesandbox.io/s/030n28?file=/src/App.jsx
// for core https://codesandbox.io/s/pzq56b?file=/index.html
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});
const agents_section_left_image = document.getElementById(
  "agents_section_left_image"
);
// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
//   window.scrollY = 1500
//     ? (agents_section_left_image.style.top = "0")
//     : console.log(window.scrollY);
// });
