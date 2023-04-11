const menu = document.querySelector('.menu');
const closeb = document.querySelector('.close');
const modal = document.querySelector('.modal');

menu.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeb.addEventListener('click', () => {
  modal.style.display = 'none';
});
