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

// Intersection Observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = entry.target.dataset.animation || '';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe weather items for scroll animation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.weather-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.dataset.animation = `slideUp 0.6s ease-out ${index * 0.1}s forwards`;
    observer.observe(item);
  });
});

// Count-up animation for temperature/stats
const countUpElements = document.querySelectorAll('.weather-temp');
const countUpObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      const text = entry.target.textContent;
      // Check if text contains a number
      const numberMatch = text.match(/\d+/);
      if (numberMatch && !isNaN(numberMatch[0])) {
        entry.target.dataset.counted = 'true';
      }
    }
  });
}, observerOptions);

countUpElements.forEach(el => countUpObserver.observe(el));

// FAQ interactions with smooth animation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      if (answer && answer.classList.contains('faq-answer')) {
        answer.classList.toggle('open');
        const toggle = this.querySelector('span:last-child');
        if (toggle) {
          toggle.textContent = toggle.textContent === '+' ? '−' : '+';
        }
      }
    });
  });

  // Expandable items animation
  document.querySelectorAll('.expandable-header').forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.toggle-icon');
      if (content && content.classList.contains('expandable-content')) {
        content.classList.toggle('open');
        if (icon) {
          icon.classList.toggle('open');
        }
      }
    });
  });
});

// Checkbox animation enhancement
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.checklist-item input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const label = this.nextElementSibling;
      if (label && this.checked) {
        label.style.animation = 'fadeIn 0.3s ease-out';
      }
    });
  });
});
