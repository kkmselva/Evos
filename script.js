// script.js

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
});

// Initialize AOS
AOS.init({
  duration: 800,
  once: true
});

// Card click navigation to single page
document.querySelectorAll('.card').forEach((card, idx) => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    window.location.href = `single.html?item=${idx + 1}`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slideContainer = document.querySelector('.carousel-slide');
  const slides = document.querySelectorAll('.carousel-slide img');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let counter = 0;

  // Funktsiya: slaydni ko'rsatish
  const updateSlide = () => {
    const slideWidth = slides[0].clientWidth;
    slideContainer.style.transform = `translateX(${-slideWidth * counter}px)`;
  };

  // Keyingi slayd
  nextBtn.addEventListener('click', () => {
    if (counter < slides.length - 1) {
      counter++;
    } else {
      counter = 0; // oxirigidan keyin boshiga qaytish
    }
    updateSlide();
  });

  // Oldingi slayd
  prevBtn.addEventListener('click', () => {
    if (counter > 0) {
      counter--;
    } else {
      counter = slides.length - 1; // boshidan oldinga qaytish
    }
    updateSlide();
  });

  // Avtomatik aylantirish (har 5 soniyada)
  const autoplayInterval = 5000; // millisekundda
  setInterval(() => {
    counter = (counter + 1) % slides.length;
    updateSlide();
  }, autoplayInterval);

  // Ekran o‘lchami o‘zgarganda yangi kenglikni hisoblash
  window.addEventListener('resize', updateSlide);
});
