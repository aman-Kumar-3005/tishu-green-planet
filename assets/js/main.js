/**
 * Tishu Green Planet - Master JavaScript
 * Core UI interactions, sticky navigation, active link styling,
 * animated stats counter, and back-to-top handler.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initActiveNavLink();
  initBackToTop();
  initStatsCounter();
  initFooterYear();
  initMobileNavAutoClose();
});

/**
 * 1. Sticky Navigation Bar with Elevation Effect
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Active Navigation Link Detection
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .dropdown-item');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      link.classList.add('active');
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const toggle = parentDropdown.querySelector('.nav-link.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    }
  });
}

/**
 * 3. Mobile Navigation Auto-close on link click
 */
function initMobileNavAutoClose() {
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link:not(.dropdown-toggle)');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
}

/**
 * 4. Back To Top Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 5. Animated Number Counters (Verified Client Statistics)
 */
function initStatsCounter() {
  const statElements = document.querySelectorAll('.stat-number[data-count]');
  if (!statElements.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statElements.forEach(el => animateCounter(el));
      }
    });
  }, { threshold: 0.25 });

  const statsSection = document.querySelector('.stats-bar') || statElements[0].closest('section');
  if (statsSection) {
    observer.observe(statsSection);
  }

  function animateCounter(el) {
    const targetValue = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const easeOutQuad = t => t * (2 - t);

    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const currentValue = targetValue * progress;

      el.textContent = (decimals > 0 ? currentValue.toFixed(decimals) : Math.floor(currentValue)) + suffix;

      if (frame >= totalFrames) {
        clearInterval(counter);
        el.textContent = (decimals > 0 ? targetValue.toFixed(decimals) : targetValue) + suffix;
      }
    }, frameDuration);
  }
}

/**
 * 6. Dynamic Footer Year
 */
function initFooterYear() {
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
}
