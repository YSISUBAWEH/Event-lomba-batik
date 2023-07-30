// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission (you can add more validation if needed)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    alert('Form submitted!');
    form.reset();
});
// Existing JavaScript code remains unchanged

// Add event listener to toggle the mobile menu
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});