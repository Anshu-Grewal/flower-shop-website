const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const slides = document.querySelectorAll(".slide");
let index = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);
}

const userIcon = document.getElementById("userIcon");
const cartIcon = document.getElementById("cartIcon");
const heartIcon = document.getElementById("heartIcon");

if (userIcon) {
  userIcon.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
}

if (cartIcon || heartIcon) {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
