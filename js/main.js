// const btnBurger = document.querySelector('.block__btnBurger');
// const backdrop = document.querySelector('.backdrop');
// const menuBurger = document.querySelector('.menu__burger');
// const header = document.querySelector('.header');
// const wrapper = document.querySelector('.wrapper');


// btnBurger.addEventListener('click', () => {
//   btnBurger.classList.toggle('active');
//   backdrop.classList.toggle('active');
//   menuBurger.classList.toggle('active');
// });


// if (header && wrapper) {
//   document.addEventListener('scroll', () => {
//     if (window.scrollY > 1) {
//       header.classList.add('fixed');
//       wrapper.classList.add('fixed');
//     } else {
//       header.classList.remove('fixed');
//       wrapper.classList.remove('fixed');
//     }
//   });
// }

const btnBurger = document.querySelector('.block__btnBurger');
const backdrop = document.querySelector('.backdrop');
const menuBurger = document.querySelector('.menu__burger');
const header = document.querySelector('.header');
const wrapper = document.querySelector('.wrapper');


btnBurger.addEventListener('click', () => {
  btnBurger.classList.toggle('active');
  backdrop.classList.toggle('active');
  menuBurger.classList.toggle('active');
  header.classList.toggle('menu-open');
});

window.addEventListener('load', () => {
  if (header) {
    setTimeout(() => {
      header.classList.add('show');
    }, 50);
  }
});

if (header && wrapper) {
  document.addEventListener('scroll', () => {
    if (window.scrollY > 0.1) {
      header.classList.add('fixed');
      wrapper.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
      wrapper.classList.remove('fixed');
    }
  });
}

window.addEventListener('load', () => {
  if (header) {
    if (window.scrollY > 0) {
      header.classList.remove('wow');
      header.style.visibility = 'visible';
      header.classList.add('fixed');
    }
  }
});