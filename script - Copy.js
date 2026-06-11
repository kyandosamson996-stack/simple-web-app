// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// Contact form handling (simple alert - replace with EmailJS/PHP later)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;

  // For now, just show a confirmation
  alert(`Thanks ${name}! Your message has been received. We'll contact you at ${email} soon.`);

  contactForm.reset();
});
