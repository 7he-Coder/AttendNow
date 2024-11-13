// `use strict`;

// const hamBurger = document.querySelector(`#hamburger`);
// const navMenu = document.querySelector(`#navbarSlide`);

// hamBurger.addEventListener(`click`, (e) => {
//   hamBurger.classList.toggle(`active`);
//   navMenu.classList.toggle(`active`);
//   console.log(e);
// });
// hamBurger.addEventListener(`click`, (e) => {
//   hamBurger.classList.remove(`active`);
//   navMenu.classList.remove(`active`);
// });

// document.querySelectorAll(".navList").forEach(n => n.addEventListener(`click`, () => {
//   hamBurger.classList.remove(`active`);
//   navMenu.classList.remove(`active`);
// }));



// Select the hamburger button and mobile navbar container
const hamburger = document.getElementById('hamburger');
const navbarSlide = document.getElementById('navbarSlide');

// Add event listener to the hamburger button to toggle the menu
hamburger.addEventListener('click', () => {
  // Toggle the 'hidden' class to show or hide the navbar
  navbarSlide.classList.toggle('hidden');
  
  // Toggle the 'open' class for the hamburger icon animation
  hamburger.classList.toggle('open');
});









// window.addEventListener(`load`, () => {
//   const loader = document.querySelector(`.loader`);

//   loader.classList.add(`loader-hidden`);

//   loader.addEventListener(`transitionend`, () => {
//     document.body.removeChild(`loader`);
//   })
// })
// // pending