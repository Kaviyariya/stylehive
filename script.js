var offer = document.querySelector(".offer-box")
var click = document.getElementById("click-button")
click.addEventListener("click", function () {
    offer.style.display = "none"
})
var menu = document.getElementById("click")
var items = document.querySelector(".menu-popup")
var remove = document.getElementById("remove")
menu.addEventListener("click", function () {
    items.style.display = "block"
})
remove.addEventListener("click", function () {
    items.style.display = "none"
})
document.addEventListener("DOMContentLoaded", () => {
    var slider = document.querySelector(".slider");
    var slides = document.querySelectorAll(".slide");
    var prev = document.querySelector(".forward");
    var next = document.querySelector(".backward");
    var dotsContainer = document.querySelector(".dot-container");

    let currentSlide = 0;
    const slideCount = slides.length;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function goToSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = "none";
        });

        // Show the selected slide
        slides[index].style.display = "block";

        // Update active dot
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");

        currentSlide = index;
    }

    // Initialize first slide
    goToSlide(0);

    // Optional: Add prev/next navigation
    prev?.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        goToSlide(currentSlide);
    });

    next?.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    });
});
var heart = document.getElementById("like");

function handleClick(element) {
    element.classList.toggle("far");
    element.classList.toggle("fas");
  }

  const scrollBox = document.getElementById("scroll-box");
  const cardWidth = 330; 

  scrollBox.focus();

  scrollBox.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      scrollBox.scrollBy({ left: cardWidth, behavior: "smooth" });
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      scrollBox.scrollBy({ left: -cardWidth, behavior: "smooth" });
      e.preventDefault();
    }
  });
  window.onload = () => {
    window.scrollTo(0, 0);
  };
  

