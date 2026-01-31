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

// ========== CAROUSEL FUNCTIONALITY ==========
class ImageCarousel {
  constructor(carouselElement) {
    this.carousel = carouselElement;
    this.track = this.carousel.querySelector('.carousel-track');
    this.images = this.carousel.querySelectorAll('.carousel-image');
    this.leftBtn = this.carousel.querySelector('.carousel-btn-left');
    this.rightBtn = this.carousel.querySelector('.carousel-btn-right');
    
    this.currentIndex = 0;
    this.imageWidth = 0;
    
    this.init();
  }

  init() {
    if (this.leftBtn) {
      this.leftBtn.addEventListener('click', () => this.scroll('left'));
    }
    if (this.rightBtn) {
      this.rightBtn.addEventListener('click', () => this.scroll('right'));
    }
    
    // Auto-slide every 5 seconds
    setInterval(() => this.autoScroll(), 5000);
  }

  scroll(direction) {
    if (direction === 'left') {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
    this.updatePosition();
  }

  autoScroll() {
    this.scroll('right');
  }

  updatePosition() {
    const container = this.carousel.querySelector('.carousel-container');
    const translateX = -this.currentIndex * 100;
    this.track.style.transform = `translateX(${translateX}%)`;
  }
}

class ScrollCarousel {
  constructor(carouselElement, itemSelector) {
    this.carousel = carouselElement;
    this.track = this.carousel.querySelector('.carousel-track');
    this.items = this.carousel.querySelectorAll(itemSelector);
    this.leftBtn = this.carousel.querySelector('.carousel-btn-left');
    this.rightBtn = this.carousel.querySelector('.carousel-btn-right');
    
    this.currentPosition = 0;
    this.itemWidth = 0;
    this.visibleItems = 4;
    
    this.init();
  }

  init() {
    this.updateLayout();
    
    if (this.leftBtn) {
      this.leftBtn.addEventListener('click', () => this.scroll('left'));
    }
    if (this.rightBtn) {
      this.rightBtn.addEventListener('click', () => this.scroll('right'));
    }
    
    window.addEventListener('resize', () => this.updateLayout());
  }

  updateLayout() {
    // Determine visible items based on screen size
    if (window.innerWidth <= 480) {
      this.visibleItems = 1;
    } else if (window.innerWidth <= 768) {
      this.visibleItems = 1.5;
    } else if (window.innerWidth <= 1024) {
      this.visibleItems = 2;
    } else {
      this.visibleItems = 3;
    }
    
    // Calculate item width including gap
    const containerWidth = this.carousel.querySelector('.carousel-container').offsetWidth;
    const gap = 16; // 1rem in pixels
    this.itemWidth = (containerWidth / this.visibleItems) - (gap * (this.visibleItems - 1) / this.visibleItems);
  }

  scroll(direction) {
    const maxScroll = this.items.length - this.visibleItems;
    
    if (direction === 'left') {
      this.currentPosition = Math.max(0, this.currentPosition - 1);
    } else {
      this.currentPosition = Math.min(maxScroll, this.currentPosition + 1);
    }
    
    this.updatePosition();
  }

  updatePosition() {
    const gap = 16;
    const totalGap = gap * this.currentPosition;
    const translateX = -(this.itemWidth * this.currentPosition + totalGap);
    this.track.style.transform = `translateX(${translateX}px)`;
    
    // Update button states
    this.updateButtonStates();
  }

  updateButtonStates() {
    const maxScroll = this.items.length - this.visibleItems;
    
    if (this.leftBtn) {
      this.leftBtn.disabled = this.currentPosition === 0;
      this.leftBtn.style.opacity = this.currentPosition === 0 ? '0.5' : '1';
    }
    
    if (this.rightBtn) {
      this.rightBtn.disabled = this.currentPosition >= maxScroll;
      this.rightBtn.style.opacity = this.currentPosition >= maxScroll ? '0.5' : '1';
    }
  }
}

// Initialize carousels after page load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Hero Carousel (image)
  const heroCarousel = document.querySelector('.hero-carousel');
  if (heroCarousel) {
    new ImageCarousel(heroCarousel);
  }
  
  // Initialize Climate Carousel
  const climateCarousel = document.querySelector('.climate-carousel');
  if (climateCarousel) {
    new ScrollCarousel(climateCarousel, '.climate-item');
  }
  
  // Trigger scroll animations
  triggerScrollAnimations();
  window.addEventListener('scroll', triggerScrollAnimations);
});

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.animation = `${entry.target.dataset.animation || 'fadeInUp'} 0.6s ease-out forwards`;
      
      // Trigger stat counter animation
      if (entry.target.classList.contains('stat-item')) {
        const h3 = entry.target.querySelector('h3');
        if (h3 && !h3.textContent.includes('UNESCO')) {
          animateCounter(h3);
        }
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function triggerScrollAnimations() {
  document.querySelectorAll('.timeline-content, .person-card, .stat-item, .culture-card, .commitment-card, .cooperative-card, .location-item, .location-map').forEach(el => {
    observer.observe(el);
  });
}

// ========== STAT COUNTER ANIMATION ==========
function animateCounter(element) {
  // Check if animation already ran
  if (element.dataset.animated === 'true') {
    return;
  }
  
  const text = element.textContent.trim();
  const numberMatch = text.match(/\d+/);
  
  if (!numberMatch) return;
  
  const targetNumber = parseInt(numberMatch[0]);
  const isPlus = text.includes('+');
  const label = text.replace(/\d+\+?/, '').trim();
  
  let currentNumber = 0;
  const duration = 800;
  const startTime = Date.now();
  
  const updateCounter = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    currentNumber = Math.floor(targetNumber * progress);
    element.textContent = currentNumber + (isPlus ? '+' : '') + (label ? ' ' + label : '');
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = targetNumber + (isPlus ? '+' : '') + (label ? ' ' + label : '');
      element.dataset.animated = 'true';
    }
  };
  
  updateCounter();
}

// Smooth scroll behavior for navigation
document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});
