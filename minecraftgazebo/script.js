const hamburger = document.querySelector(".hamburger");
const navbara = document.querySelector(".navbar a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbara.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbara.classList.remove("active");
  })
);
