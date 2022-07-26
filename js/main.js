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

// TODO:穴埋め5

const navLink = document.getElementsByClassName("nav-link");

// TODO:穴埋め6
