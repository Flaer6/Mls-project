'use strict';

//Для nav
let menuListOpen = document.querySelector('.menu-list-open'),
    menuListClick = document.querySelector('.menu-list-click');

menuListClick.addEventListener('click', () => {
  menuListOpen.classList.toggle('menu--parent');
});

//Для section
let heroesOpen = document.querySelectorAll('.heroes__list-btn'),
    heroesList = document.querySelectorAll('.heroes__list-story-sub'),
    addClass = document.querySelectorAll('.heroes__list-item');

for (let i = 0; i < heroesOpen.length; i++) {
heroesOpen[i].addEventListener('click', () => {
  heroesList[i].classList.toggle('heroes__list-story-sub--open');
  addClass[i].classList.toggle('heroes__list-item--open');
}); 
}
