// ====== Hamburger menu toggle (mobile) ======
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Icons click scroll
document.getElementById("userIcon").addEventListener("click", function () {
  document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("cartIcon").addEventListener("click", function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("heartIcon").addEventListener("click", function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

// Slider
const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);
