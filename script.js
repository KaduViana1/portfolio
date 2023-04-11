// Modal Scripts
const projectsImages = document.querySelectorAll('[data-modal-src]');
const modal = document.querySelector('[data-modal]');
const modalImg = document.querySelector('[data-modal-img]');
const closeModal = document.querySelector('.closeModal');

function openModal(imgSrc) {
  modalImg.src = imgSrc;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  document.body.style.marginRight = scrollWidth.toString() + 'px';
}

projectsImages.forEach(item => {
  item.addEventListener('click', () => openModal(item.src));
});

closeModal.addEventListener('click', () => {
  document.body.style.overflow = 'visible';
  document.body.style.marginRight = '0';
  modal.style.display = 'none';
});

// Animations Scripts
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('balloon-animation');
    }
  });
});

observer.observe(document.querySelector('.balloon'));
