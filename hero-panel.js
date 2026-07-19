const heroButton = document.querySelector('.hero-button');
const heroSection = document.querySelector('.hero-section');
const allPanels = document.querySelectorAll('.detail-panel');
const closeButton = document.querySelector('.nav-list li:first-child a');

const search=document.getElementById('search');//in left-top-panel

function openPanel() {
  heroButton?.classList.add('is-pressed');
  heroSection?.classList.add('is-hidden');
  allPanels.forEach(panel=>{
    panel.classList.add('is-open');
  });
  if(!search.classList.contains('has-loaded')){
    search.classList.add('animated');
  }
/*monitor the animation of the elements in the panels,
if the elements have loaded then just keep them still regardless of the panels' status*/
  search.addEventListener('animationend',()=>{
    search.classList.remove('animated');
    search.classList.add('has-loaded');
  },{once:true});
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