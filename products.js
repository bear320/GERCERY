// Sold out
$(document).ready(function () {
  //   console.log($("div.btn-cart"));
  if ($(".btn-cart").hasClass("sold-out") == true) {
    $("div.sold-out").html('<i class="fa-solid fa-truck"></i> 售完補貨中').css({
      backgroundColor: "#44514b80",
      cursor: "not-allowed",
    });
  }
});
