// Images enlarge and control
$(document).ready(function () {
  let largeImg = $("#large-img");

  $(".thumbnail img").click(function () {
    largeImg.attr("src", $(this).attr("src"));
    $(this).addClass("current-img").siblings().removeClass("current-img");
  });

  $("button.to-prev").click(function () {
    if ($(".current-img").hasClass("thumbnail-first") == false) {
      $(".current-img").prev().addClass("current-img").siblings().removeClass("current-img");
      largeImg.attr("src", $(".current-img").attr("src"));
    }
  });

  $("button.to-next").click(function () {
    if ($(".current-img").hasClass("thumbnail-last") == false) {
      $(".current-img").next().addClass("current-img").siblings().removeClass("current-img");
      largeImg.attr("src", $(".current-img").attr("src"));
    }
  });
});

// Tab switch
$(document).ready(function () {
  tabCutover();
});

function tabCutover() {
  $(".tab-title li.active").each(function () {
    var tablink = $(this).find("a").data("tablink");

    $("#" + tablink)
      .show()
      .siblings(".tab-inner")
      .hide();
  });

  $(".tab-title li").click(function () {
    $("#" + $(this).find("a").data("tablink"))
      .show()
      .siblings(".tab-inner")
      .hide();
    $(this).addClass("active").siblings(".active").removeClass("active");
  });
}

// Quantity control
$(document).ready(function () {
  let plusBtn = $(".quantity-plus");
  let minusBtn = $(".quantity-minus");
  let qty = $(".qty-input");

  plusBtn.click(function () {
    if (qty.val() < 10) {
      qty.val(parseInt(qty.val()) + 1);
    }
  });

  minusBtn.click(function () {
    if (qty.val() > 0) {
      qty.val(parseInt(qty.val()) - 1);
    }
  });
});

// Switch wishlist
$(document).ready(function () {
  switchFavorite();
});

function switchFavorite() {
  let wishlist = $(".wishlist");
  // let heart = $("#heart");
  wishlist.click(function () {
    if (wishlist.html() == '<i class="fa-regular fa-heart" id="heart"></i> 收藏商品') {
      wishlist.html('<i class="fa-solid fa-heart" id="heart"></i> 取消收藏');
    } else {
      wishlist.html('<i class="fa-regular fa-heart" id="heart"></i> 收藏商品');
    }
  });
}

// Carousel of ralated products
$(".related-wrap").owlCarousel({
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
    768: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  },
});
