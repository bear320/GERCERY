// Check Session Storage
$(document).ready(function () {
  if (JSON.parse(sessionStorage.getItem("closedNewsTicker")) == true) {
    $(".news-ticker").hide();
  }

  if (JSON.parse(sessionStorage.getItem("playedPreloader")) == true) {
    $(".preloader").hide();
  }
});

// Preloader
$(document).ready(function () {
  $(".preloader").delay(3000).fadeOut(1000);
  // check proloader has been played and save this event to session storage
  sessionStorage.setItem("playedPreloader", "true");
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
    // check News Ticker has been closed and save this click evevt to session storage
    sessionStorage.setItem("closedNewsTicker", "true");
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

// Lightbox: LINE
$(document).ready(function () {
  $(".fixed a.line-link").click(function () {
    $(".lightbox-bg").show();
  });

  $(".lb-to-close").click(function () {
    $(".lightbox-bg").fadeOut(500);
  });

  $(".lightbox-bg").click(function (e) {
    // 設置目標區域
    let targertArea = $(".lightbox-wrap");

    // 判斷點選事件發生在區域外的條件：點選事件的對象不是目標區域本身＆事件對象同時也不是目標區域的子元素
    if (!targertArea.is(e.target) && targertArea.has(e.target).length === 0) {
      $(".lightbox-bg").fadeOut(500);
    }
  });
});

// Lightbox: Add to cart
$(document).ready(function () {
  $(".bestseller-item a .img .add-to-cart").click(function (event) {
    $(".lightbox-bg-cart").show().delay(2000).fadeOut(500);
    event.preventDefault();
  });

  $(".btn-cart").click(function () {
    if ($(this).hasClass("sold-out") == false) {
      $(".lightbox-bg-cart").show().delay(2000).fadeOut(500);
    }
  });

  $(".btn-add-to-cart").click(function () {
    $(".lightbox-bg-cart").show().delay(2000).fadeOut(500);
  });

  $(".related-add-to-cart").click(function () {
    $(".lightbox-bg-cart").show().delay(2000).fadeOut(500);
  });
});
