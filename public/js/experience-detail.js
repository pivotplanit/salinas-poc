// Load header and footer
fetch('header.html')
  .then(r => r.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;
    setActiveNav();
  });

fetch('footer.html')
  .then(r => r.text())
  .then(html => {
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

// Carousel functionality
let currentSlide = 0;
const slides = [
  'https://placehold.co/1200x400/ecf0f1/2c3e50?text=Cheese+Route',
  'https://placehold.co/1200x400/e8d5f2/9b59b6?text=Salt+Mines',
  'https://placehold.co/1200x400/d5f2e8/1abc9c?text=Production',
  'https://placehold.co/1200x400/f2e8d5/e67e22?text=Tasting',
  'https://placehold.co/1200x400/f2d5d5/e74c3c?text=Experience'
];

function updateCarousel() {
  const slide = document.querySelector('.carousel-slide img');
  const dots = document.querySelectorAll('.dot');
  
  if (slide) {
    slide.src = slides[currentSlide];
  }
  
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Carousel button handlers
document.querySelector('.carousel-btn-left')?.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});

document.querySelector('.carousel-btn-right')?.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
});

// Dot click handler
document.querySelectorAll('.dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateCarousel();
  });
});

// FAQ Accordion with smooth animations
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function() {
    const faqItem = this.parentElement;
    const answer = this.nextElementSibling;
    
    // Close all other open FAQs
    document.querySelectorAll('.faq-item.open').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('open');
        item.querySelector('.faq-answer').classList.remove('open');
      }
    });
    
    // Toggle current FAQ
    faqItem.classList.toggle('open');
    answer.classList.toggle('open');
  });
});

// Staggered animations on page load
document.addEventListener('DOMContentLoaded', function() {
  // Stagger section animations
  document.querySelectorAll('.section').forEach((section, index) => {
    section.style.animationDelay = (index * 0.1) + 's';
  });

  // Stagger booking benefits
  document.querySelectorAll('.benefit-item').forEach((item, index) => {
    item.style.animationDelay = (0.3 + index * 0.1) + 's';
  });

  // Stagger highlights list items
  document.querySelectorAll('.highlights-list li').forEach((li, index) => {
    li.style.animationDelay = (index * 0.05) + 's';
  });

  // Stagger itinerary items
  document.querySelectorAll('.itinerary-item').forEach((item, index) => {
    item.style.animationDelay = (index * 0.08) + 's';
  });

  // Stagger related cards
  document.querySelectorAll('.related-card').forEach((card, index) => {
    card.style.animationDelay = (index * 0.15) + 's';
  });

  // Stagger testimonials
  document.querySelectorAll('.testimonial-item').forEach((item, index) => {
    item.style.animationDelay = (index * 0.1) + 's';
  });

  // Initialize carousel with first image
  updateCarousel();
});

// Scroll-triggered animations (fade-in on scroll)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Observe FAQ items and testimonials
document.querySelectorAll('.faq-item, .testimonial-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  observer.observe(el);
});

// Smooth scroll behavior for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
