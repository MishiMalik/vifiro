
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $(".navbar").css("background", "white");
      $(".navbar").css("box-shadow", " 0 .125rem .25rem rgba(0,0,0,.075)");
      $(".nav-link").css("color", "black");
      $(".text-home").css("color", "black");
      $(".navbar-toggler-icons").css("background-image"," url(./images/black.svg) ");
    }

    else {
      $(".navbar").css("background", "transparent");
      $(".nav-link").css("color", "rgba(255,255,255,.55)");
      $(".text-home").css("color", "black");
      $(".navbar").css("box-shadow", " none");
      $(".navbar-toggler-icons").css("background-image"," url(./images/white.svg) ")
    }

  })
})