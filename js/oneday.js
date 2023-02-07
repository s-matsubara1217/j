const welfare_swiper = new Swiper('.welfare__swiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 2000,
  // autoplay: {
  //   delay: 8000,
  //   disableOnInteraction: false,
  //   waitForTransition: false,
  // },

  pagination: {
    el: '.welfare__swiper-pagination',
    clickable: true,
  },
});
