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

const topTitleElement = document.getElementById("topTitle");

document.addEventListener("mousemove", (event) => {
  const widthPercentage = (event.clientX / window.innerWidth) * 100;
  const heightPercentage = (event.clientY / window.innerHeight) * 50;
  if (topTitleElement) {
    topTitleElement.style.fontVariationSettings = `'rnds' ${widthPercentage}, 'dtsz' ${heightPercentage + 50}`;
  }
});

const adjustFontSize = () => {
  if (topTitleElement) {
    const screenWidth = window.innerWidth;
    const textLength = topTitleElement.textContent.length;
    const fontSize = (screenWidth * 2) / textLength;
    topTitleElement.style.fontSize = `${fontSize}px`;
  }
};

window.addEventListener("load", adjustFontSize);
window.addEventListener("resize", adjustFontSize);
