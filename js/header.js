document.querySelector('.burger-menu-toggle').addEventListener('click', () => {
  document.querySelector('.off-canvas-menu').classList.add('menu-open');
  document.body.style.overflowY = 'hidden';


});

document.querySelector('.burger-menu-close').addEventListener('click', () => {
  document.querySelector('.off-canvas-menu').classList.remove('menu-open');
  document.body.style.overflowY = 'auto';

});