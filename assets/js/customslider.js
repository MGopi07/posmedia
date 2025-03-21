let currentSlide = 0;
const slides = document.querySelectorAll(".custom-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");

    if (i === index) {
      slide.classList.add("active");

      // Reset animation for letters
      const letters = slide.querySelectorAll(".custom-title span");
      letters.forEach(letter => {
        letter.style.opacity = "0";
        letter.style.transform = "translateY(10px)";
        letter.style.animation = "none";
      });

      // Reapply animation with a delay
      setTimeout(() => {
        letters.forEach((letter, i) => {
          letter.style.animation = `fadeInUp 0.5s forwards ${i * 0.3}s`;
        });
      }, 100);
    }
  });
}

// Next Slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Previous Slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto Slide every 5 seconds
setInterval(nextSlide, 5000);

// Initial Animation on Page Load
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
