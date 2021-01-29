$(document).ready(function () {
  $("#toggleBtn").click(function () {
    $("#topHeader").show();
  });

  $("#hideBtn").click(function () {
    $("#topHeader").css({ display: "none" });
  });

  $(".slickSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    prevArrow: false,
    nextArrow: false
  });
});
