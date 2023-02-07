const welfare_swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 2000,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
    waitForTransition: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
