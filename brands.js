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
