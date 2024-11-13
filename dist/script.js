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

document.querySelectorAll(`.navLink`).forEach((e => e.addEventListener(`click`, () => {
  // Toggle the 'hidden' class to show or hide the navbar
  navbarSlide.classList.toggle('hidden');

  // Toggle the 'open' class for the hamburger icon animation
  hamburger.classList.toggle('open');
})))









// window.addEventListener(`load`, () => {
//   const loader = document.querySelector(`.loader`);

//   loader.classList.add(`loader-hidden`);

//   loader.addEventListener(`transitionend`, () => {
//     document.body.removeChild(`loader`);
//   })
// })
// // pending