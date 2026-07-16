const heroButton = document.querySelector('.hero-button');
const heroSection = document.querySelector('.hero-section');
const allPanels = document.querySelectorAll('.detail-panel');
const closeButton = document.querySelector('.nav-list li:first-child a');

function openPanel() {
  heroButton?.classList.add('is-pressed');
  heroSection?.classList.add('is-hidden');
  allPanels.forEach(panel=>{
    panel.classList.add('is-open');
  });
}

function closePanel() {
  heroButton?.classList.remove('is-pressed');
  heroSection?.classList.remove('is-hidden');
  allPanels.forEach(panel=>{
    panel.classList.remove('is-open');
  });
}

heroButton?.addEventListener('click', openPanel);
closeButton?.addEventListener('click', closePanel);
