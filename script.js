// Navigation bar
const handleEvent = () => {
  const nav = document.querySelector(".links");
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelectorAll(".links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.7
        }s`;
      }
    });
  });
};

handleEvent();

//Home section
