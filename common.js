// Preloader
$(document).ready(function () {
  $(".preloader").delay(3000).fadeOut(1000);
});

// News Ticker
$(document).ready(function ($) {
  var tickerSpeed = $(".news-ticker").attr("data-speed");

  $(".news-ticker ul li").hide();
  $(".news-ticker ul li:first").show();

  var currentSlide = 0;
  var slideCount = $(".news-ticker li").length - 1;

  var startTicker = setInterval(function () {
    $(".news-ticker ul li").eq(currentSlide).fadeOut(500);

    if (currentSlide < slideCount) {
      currentSlide += 1;
    } else {
      currentSlide = 0;
    }

    $(".news-ticker ul li").eq(currentSlide).fadeIn(500);
  }, tickerSpeed);

  $(".close-ticker").on("click", function () {
    clearInterval(startTicker);
    $(".news-ticker").fadeOut(500, function () {
      $(this).remove();
    });
  });
});

// Go to top
$(".go-to-top").click(function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    600
  );
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    if ($(".go-to-top").hasClass("hide")) {
      $(".go-to-top").toggleClass("hide");
    }
  } else {
    $(".go-to-top").addClass("hide");
  }
});

// AOS initialize
AOS.init();
