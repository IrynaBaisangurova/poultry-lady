

// Swiper

// const prevButton = document.querySelector('.swiper-button-prev-rev');
// const nextButton = document.querySelector('.swiper-button-next-rev');
// let swiper;

// function updateButtons() {
      
//   if (!swiper) return;

//   if (swiper.isBeginning) {
//     prevButton.setAttribute('disabled', 'true');
//   } else {
//     prevButton.removeAttribute('disabled');
//   }

//   if (swiper.isEnd) {
//     nextButton.setAttribute('disabled', 'true');
//   } else {
//     nextButton.removeAttribute('disabled');
//   }
// }

//   swiper = new Swiper('.swiper', {
//   loop: false,
//   direction: 'horizontal',
//   simulateTouch: true,
//   grabCursor: true,
//   spaceBetween: 16,
//   slidesPerView: 1, // 375px
//   speed: 1000,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next-rev',
//     prevEl: '.swiper-button-prev-rev',
//   },
//   on: {
//     slideChange: updateButtons,
//     init: updateButtons,
//   },
//   breakpoints: {
//     768: { slidesPerView: 2 },
//     1440: { slidesPerView: 4 },
//   },
// });

// import Swiper from 'swiper';
// import 'swiper/css';
// import { Navigation, Pagination } from 'swiper/modules';
// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';



document.addEventListener('DOMContentLoaded', () => {

  const prevButton = document.querySelector('.button-prev');
  const nextButton = document.querySelector('.button-next');

  let swiper

  function updateButtonsState() {
      
    if (!swiper) return;

    if (swiper.isBeginning) {
      prevButton.setAttribute('disabled', 'true');
    } else {
      prevButton.removeAttribute('disabled');
    }

    if (swiper.isEnd) {
      nextButton.setAttribute('disabled', 'true');
    } else {
      nextButton.removeAttribute('disabled');
    }
  }

  swiper = new Swiper('.slider-wrapper', {
    watchOverflow: false,
    loop: true,
    direction: 'horizontal',
    simulateTouch: true,
    grabCursor: true,
    slidesPerView: 1,
    speed: 1000,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    on: {
      slideChange: updateButtonsState,
      init: updateButtonsState,
    },
    breakpoints: {
          768: { slidesPerView: 2 },
          1440: { slidesPerView: 4 },
        },
  });
});
