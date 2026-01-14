const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const gallery = document.querySelector('.gallery');
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title');
const modalPhoto = document.querySelector('.modal-photo');
const modalClose = document.querySelector('.modal-close');
const galleryMore = document.querySelector('.gallery-more');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

document.addEventListener('click', (event) => {
  if (!nav.classList.contains('open')) {
    return;
  }

  const isToggle = navToggle.contains(event.target);
  const isNav = nav.contains(event.target);

  if (!isToggle && !isNav) {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

if (gallery && modal && modalTitle && modalPhoto) {
  gallery.addEventListener('click', (event) => {
    const item = event.target.closest('.gallery-item');
    if (!item) {
      return;
    }
    const title = item.getAttribute('data-title') || 'Preview';
    const img = item.querySelector('img');
    const src = img ? img.getAttribute('src') : '';
    const alt = img ? img.getAttribute('alt') : 'Preview';
    modalTitle.textContent = title;
    modalPhoto.src = src;
    modalPhoto.alt = alt;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
}

function closeModal() {
  if (!modal || !modalPhoto) {
    return;
  }
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalPhoto.src = '';
}

if (modal && modalClose) {
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

if (galleryMore) {
  const total = Number(gallery?.dataset?.total || galleryItems.length);
  if (total > 8) {
    galleryMore.style.display = 'inline-flex';
  }
}
