// Carousel of Brands
$(".brand-slider-wrap").owlCarousel({
  center: false,
  items: 2,
  loop: true,
  margin: 10,
  nav: true,
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

// Tab switch + Go to brand introduction
$(document).ready(function () {
  tabCutover();
  goToBrand();
});

function tabCutover() {
  $(".brand-tab-title div.active").each(function () {
    var tablink = $(this).find("a").data("tablink");

    $("#" + tablink)
      .show()
      .siblings(".brand-tab-inner")
      .hide();
  });

  $(".brand-tab-title .brand-item").click(function () {
    $("#" + $(this).find("a").data("tablink"))
      .show()
      .siblings(".brand-tab-inner")
      .hide();
    $(this).addClass("active").siblings(".active").removeClass("active");
  });
}

function goToBrand() {
  $(".brand-item").click(function () {
    $("html,body").animate({ scrollTop: $("#go-to-brand").offset().top - 200 }, 500);
  });
}

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
