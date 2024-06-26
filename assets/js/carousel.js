$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  autoplay: true,
  autoplayTimeOut: 1500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: false,
    },
  },
});
