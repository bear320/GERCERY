// Carousel of Brands
$(".brand-slider-wrap").owlCarousel({
  center: false,
  items: 2,
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  // autoplay: true,
  // autoplayTimeout: 3000,
  // autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});

// Carousel of Brands' Bestsellers
$(".popularity-wrap").owlCarousel({
  center: false,
  items: 2,
  loop: true,
  margin: 10,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    550: {
      items: 2,
    },
    769: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  },
});
