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

// Images enlarge

// $(document).ready(function () {
//   let imgs = $(".thumbnail img");
//   for (let i = 0; i < imgs.length; i++) {
//     imgs[i].click(enlarge());
//   }
// });

// function enlarge(e) {
//   let small = e.target;
//   small.src = $("#large-img").src;
// }

function showLarge(e) {
  let small = e.target;
  document.querySelector("#large-img").src = small.src;
}

function init() {
  let imgs = document.querySelectorAll(".thumbnail img");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", showLarge);
  }
}

window.addEventListener("load", init, false);

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
