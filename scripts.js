

// Add an event listener to the navbar links
const navbarLinks = document.querySelectorAll('.nav-link');
navbarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Remove the show class from the navbar
    navbar.classList.remove('show');
  });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contactForm').reset();
  }, 1000);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navbarLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});