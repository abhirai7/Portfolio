// Add event listener to navigation links


// Get the navbar and navbar-toggler elements
const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar-toggler');

// Add an event listener to the navbar-toggler
navbarToggler.addEventListener('click', () => {
  // Toggle the collapse class on the navbar
  navbar.classList.toggle('show');
});

// Add an event listener to the navbar links
const navbarLinks = document.querySelectorAll('.nav-link');
navbarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Remove the show class from the navbar
    navbar.classList.remove('show');
  });
});