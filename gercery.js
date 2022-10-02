// Homepage
// Carousel of Bestsellers
$(".bestseller-slider-wrap").owlCarousel({
  center: true,
  items: 2,
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    1024: {
      items: 5,
    },
  },
});

// Carousel of Testimonials
$(".testimonial-slider-wrap").owlCarousel({
  //   center: true,
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
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

// Brands Page
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
