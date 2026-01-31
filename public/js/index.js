// Load header and footer
fetch('./header.html')
  .then((r) => r.text())
  .then((html) => {
    document.getElementById('header').innerHTML = html;
    setActiveNav();
  });
fetch('./footer.html')
  .then((r) => r.text())
  .then((html) => {
    document.getElementById('footer').innerHTML = html;
  });

// Set active nav link based on data-page attribute
function setActiveNav() {
  const currentPage = document.body.dataset.page;
  document.querySelectorAll('nav a[data-page]').forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ========== ANIMATIONS ==========

// Intersection Observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards for scroll animations
document
  .querySelectorAll(
    '.category-card, .feature-card, .experience-card, .testimonial-card',
  )
  .forEach((el) => {
    observer.observe(el);
  });

// Counter animation for feature stats
function animateCounter(element, target, duration = 1000) {
  let current = 0;
  const increment = target / (duration / 16);
  const regex = /(\d+)/;
  const originalText = element.textContent;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    const newText = originalText.replace(regex, Math.floor(current));
    element.textContent = newText;
  }, 16);
}

// Trigger counter animations when stats come into view
const statsObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      const text = entry.target.textContent;
      const match = text.match(/(\d+)/);
      if (match) {
        const target = parseInt(match[1]);
        animateCounter(entry.target, target);
      }
      statsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-stat').forEach((el) => {
  statsObserver.observe(el);
});

// Section title underline animation on scroll
const titleObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.dataset.titleAnimated) {
      entry.target.dataset.titleAnimated = 'true';
      const underline = entry.target.querySelector('::after');
      entry.target.style.setProperty('--underline-opacity', '1');
      // Trigger the after pseudo-element animation
      entry.target.style.opacity = '1';
    }
  });
}, observerOptions);

document.querySelectorAll('.section-title').forEach((el) => {
  titleObserver.observe(el);
  // Make title underline visible on scroll
  el.style.setProperty('--underline-opacity', '0');
});

// Apply opacity to section titles for visibility
document.querySelectorAll('.section-title::after').forEach((el) => {
  el.style.opacity = '1';
});

// Direct opacity trigger for section titles
const titleElements = document.querySelectorAll('.section-title');
titleElements.forEach((title) => {
  // Create a simple observer to show the underline
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            title.style.opacity = '1';
          }, 100);
        }
      });
    },
    { threshold: 0.1 },
  );
  observer.observe(title);
});
