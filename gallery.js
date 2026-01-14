const galleryGrid = document.querySelector('#gallery-grid');
const loadButton = document.querySelector('.gallery-load');

const images = [
  'images/gallery/commission result 10.png',
  'images/gallery/commission result 11.png',
  'images/gallery/commission result 12.png',
  'images/gallery/commission result 13.png',
  'images/gallery/commission result 14.png',
  'images/gallery/commission result 15.png',
  'images/gallery/commission result 16.png',
  'images/gallery/commission result 17.png',
  'images/gallery/commission result 18.png',
  'images/gallery/commission result 19.png',
  'images/gallery/commission result 20.png',
  'images/gallery/commission result 21.png',
  'images/gallery/commission result 22.png',
  'images/gallery/commission result 23.png',
  'images/gallery/commission result 24.png',
  'images/gallery/commission result 25.png',
  'images/gallery/commission result 26.png',
  'images/gallery/commission result 27.png'
];

const batchSize = 12;
let currentIndex = 0;

function createGalleryItem(src, index) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'gallery-item';
  button.setAttribute('data-title', `Gallery ${String(index + 1).padStart(2, '0')}`);

  const img = document.createElement('img');
  img.src = src;
  img.alt = `Karya gallery ${index + 1}`;
  img.loading = 'lazy';

  button.appendChild(img);
  return button;
}

function loadBatch() {
  if (!galleryGrid) {
    return;
  }

  const next = images.slice(currentIndex, currentIndex + batchSize);
  next.forEach((src, idx) => {
    const item = createGalleryItem(src, currentIndex + idx);
    galleryGrid.appendChild(item);
  });

  currentIndex += next.length;
  if (currentIndex >= images.length && loadButton) {
    loadButton.style.display = 'none';
  }
}

if (loadButton) {
  loadButton.addEventListener('click', loadBatch);
}

loadBatch();
