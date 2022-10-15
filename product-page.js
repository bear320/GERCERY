// Switch wishlist
$(document).ready(function () {
  switchFavorite();
});

function switchFavorite() {
  let wishlist = $(".wishlist");
  let heart = $("#heart");
  wishlist.click(function () {
    if (wishlist.html() == '<i class="fa-regular fa-heart" id="heart"></i> 收藏商品') {
      wishlist.html('<i class="fa-solid fa-heart" id="heart"></i> 取消收藏');
    } else {
      wishlist.html('<i class="fa-regular fa-heart" id="heart"></i> 收藏商品');
    }
  });
}

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
