// Load header and footer
fetch('header.html').then(r => r.text()).then(html => {
  document.getElementById('header').innerHTML = html;
  setActiveNav();
});
fetch('footer.html').then(r => r.text()).then(html => {
  document.getElementById('footer').innerHTML = html;
});

// Set active nav link based on data-page attribute
function setActiveNav() {
  const currentPage = document.body.dataset.page;
  document.querySelectorAll('nav a[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Scroll-triggered animations using IntersectionObserver
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements that need scroll-triggered animations
document.querySelectorAll('.itinerary-card, .feature-card, .testimonial-card').forEach(el => {
  observer.observe(el);
});

// Add smooth transitions for form inputs
document.querySelectorAll('input, select, textarea').forEach(input => {
  input.addEventListener('focus', function() {
    this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  });
});

// Stagger animation for checkboxes and radio buttons
document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach((input, index) => {
  input.style.animationDelay = (index * 0.05) + 's';
});
