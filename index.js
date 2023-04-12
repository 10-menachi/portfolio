const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
const form = document.querySelector('.contact-form');
const email = document.querySelector('.email');
const errorContainer = document.querySelector('.error-container');

hamMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    if (email.validity) {
      email.setCustomValidity('Email must be in lowercase');
      errorContainer.textContent = 'Email must be in lowercase';
    }
  }
});

email.addEventListener('input', () => {
  if (email.validity) {
    email.setCustomValidity('');
    errorContainer.textContent = '';
  }
});
