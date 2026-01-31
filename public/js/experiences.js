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

// ===== ANIMATION INTERACTIONS =====

// Filter Section Expand/Collapse
document.querySelectorAll('.filter-title').forEach(title => {
  title.addEventListener('click', function() {
    const section = this.closest('.filter-section');
    section.classList.toggle('collapsed');
  });
});

// Load More Button - Loading State
const loadMoreBtn = document.querySelector('.load-more-btn');
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', function() {
    // Add loading state
    this.classList.add('loading');
    this.disabled = true;

    // Simulate loading
    setTimeout(() => {
      // Create 3 new cards with animation
      const grid = document.querySelector('.experiences-grid');
      const cardHTML = `
        <div class="experience-card new-card">
          <div class="experience-card-image">🏔️</div>
          <div class="experience-card-content">
            <p class="experience-card-tag">Adventure</p>
            <h3>Salt Mines & Cheese Factory Tour</h3>
            <p>Discover the ancient tradition of salt extraction and visit the famous cheese factory.</p>
            <div class="experience-meta">
              <span class="meta-item">⏱️ 4h</span>
              <span class="meta-item">🎯 Moderate</span>
            </div>
            <div class="difficulty-badges">
              <span class="difficulty-badge filled"></span>
              <span class="difficulty-badge filled"></span>
              <span class="difficulty-badge"></span>
            </div>
            <div class="experience-details-list">
              <span>🗻 Altitude: 3500m</span>
              <span>👥 Group: 4-20</span>
            </div>
            <a href="experience-detail.html" class="learn-more-btn">Learn More →</a>
          </div>
        </div>
      `;
      
      for (let i = 0; i < 3; i++) {
        grid.insertAdjacentHTML('beforeend', cardHTML);
      }

      // Remove loading state
      this.classList.remove('loading');
      this.disabled = false;

      // Update results count with animation
      updateResultsCount();
    }, 1500);
  });
}

// Update Results Count with Counter Animation
function updateResultsCount() {
  const resultsInfo = document.querySelector('.results-info');
  if (!resultsInfo) return;

  const text = resultsInfo.textContent;
  const match = text.match(/(\d+)\s+of\s+(\d+)/);
  
  if (match) {
    const current = parseInt(match[1]);
    const total = parseInt(match[2]);
    
    // Increment by 3 (number of new cards)
    const newCurrent = Math.min(current + 3, total);
    resultsInfo.textContent = `Showing ${newCurrent} of ${total} experiences`;
    
    // Add fade animation
    resultsInfo.style.animation = 'none';
    setTimeout(() => {
      resultsInfo.style.animation = 'fadeIn 0.4s ease-out';
    }, 10);
  }
}

// Sort Select Change Animation
const sortSelect = document.querySelector('.sort-select');
if (sortSelect) {
  sortSelect.addEventListener('change', function() {
    const grid = document.querySelector('.experiences-grid');
    grid.style.animation = 'none';
    
    setTimeout(() => {
      grid.style.animation = 'gridFadeIn 0.4s ease-out';
    }, 10);

    console.log('Sorting by:', this.value);
    // TODO: Implement actual sorting logic here
  });
}

// Checkbox State Persistence (optional enhancement)
document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    // Optional: Add animation class
    this.parentElement.style.animation = 'none';
    setTimeout(() => {
      this.parentElement.style.animation = 'fadeIn 0.2s ease-out';
    }, 10);

    console.log('Filter changed:', this.id, this.checked);
    // TODO: Implement actual filter logic here
  });
});

// Intersection Observer for cards entering viewport (advanced)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.experience-card').forEach(card => {
  observer.observe(card);
});
