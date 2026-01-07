// DOM Ready
document.addEventListener('DOMContentLoaded', () => {

  // ==============
  // MOBILE MENU TOGGLE
  // ==============
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.header nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
      menuToggle.classList.toggle('open');
    });

    // Close menu when a nav link is clicked (mobile UX best practice)
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('mobile-open');
        menuToggle.classList.remove('open');
      });
    });
  }

  // ==============
  // FORM VALIDATION (South African phone numbers)
  // ==============
  const contactForms = document.querySelectorAll('.contact-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const phoneInput = form.querySelector('input[name="phone"]');
      if (phoneInput) {
        let phone = phoneInput.value.trim();
        // Remove spaces, hyphens, plus, etc.
        phone = phone.replace(/\D/g, '');

        // South African mobile numbers usually start with 06, 07, 08
        // Valid length: 10 digits (e.g., 0821234567)
        const saMobileRegex = /^(06|07|08)\d{8}$/;

        if (!saMobileRegex.test(phone)) {
          e.preventDefault();
          alert('Please enter a valid South African mobile number (e.g., 082 123 4567).');
          phoneInput.focus();
        } else {
          // Optional: normalize phone for backend (e.g., +27821234567)
          // But FormSubmit works fine with 082...
        }
      }
    });
  });

  // ==============
  // SMOOTH SCROLL FOR ANCHOR LINKS (optional but nice)
  // ==============
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80, // adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });

});