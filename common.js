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
