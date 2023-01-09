// for react https://codesandbox.io/s/030n28?file=/src/App.jsx
// for core https://codesandbox.io/s/pzq56b?file=/index.html
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
const agents_section_left_image = document.getElementById(
  "agents_section_left_image"
);
// Hiding Title of anchor
let clearAnchorTitles = document.getElementsByClassName("hide-title");
let title;
const hidingAnchorTitle = () => {
  for (const anchor of clearAnchorTitles) {
    anchor.addEventListener("mouseover", () => {
      title = anchor.getAttribute("title");
      anchor.setAttribute("title", "");
    });
    anchor.addEventListener("mouseout", () => {
      anchor.setAttribute("title", title);
    });
  }
};
hidingAnchorTitle();
