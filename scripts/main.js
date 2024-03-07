window.onload = () => {
  new Swiper(".swiper-container", {
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    speed: 500,
    effect: "fade",
  });
};

const menuBtn = document.getElementById("menuBtn");
const header = document.getElementById("header");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});

const navLink = document.getElementsByClassName("nav-link");

Array.from(navLink).forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.toggle("active");
  });
});
