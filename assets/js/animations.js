/**
 * Tishu Green Planet - Animations & Interactive Modules
 * Scroll reveals, gallery filter tabs, image lightbox modal,
 * and video preview modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initGalleryFilter();
  initLightbox();
  initVideoModal();
});

/**
 * 1. IntersectionObserver Scroll Reveal
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-fade-up');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * 2. Filterable Gallery Tabs
 */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 30);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/**
 * 3. Lightbox Modal for Gallery Images
 */
function initLightbox() {
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const galleryItems = document.querySelectorAll('.gallery-item, .lightbox-trigger');

  if (!lightboxModal || !lightboxImg || !galleryItems.length) return;

  galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const img = item.querySelector('img');
      const caption = item.getAttribute('data-caption') || (item.querySelector('.gallery-item-title') ? item.querySelector('.gallery-item-title').textContent : '');
      const fullSrc = item.getAttribute('data-full-img') || (img ? img.src : '');

      if (fullSrc) {
        lightboxImg.src = fullSrc;
        lightboxCaption.textContent = caption;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      lightboxImg.src = '';
      lightboxCaption.textContent = '';
    }, 250);
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/**
 * 4. Video Preview Modal
 */
function initVideoModal() {
  const videoCards = document.querySelectorAll('.video-card[data-video-id]');
  const videoModalElement = document.getElementById('videoModal');
  const videoIframe = document.getElementById('videoModalIframe');

  if (!videoCards.length || !videoModalElement || !videoIframe) return;

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoId = card.getAttribute('data-video-id');
      if (videoId) {
        videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        const bsModal = new bootstrap.Modal(videoModalElement);
        bsModal.show();
      }
    });
  });

  videoModalElement.addEventListener('hidden.bs.modal', () => {
    videoIframe.src = '';
  });
}
