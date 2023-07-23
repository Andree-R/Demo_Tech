const menuToggle = document.querySelector('.btn_menu');
const menu = document.querySelector('.nav__list');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle("active");
});