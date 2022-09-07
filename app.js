
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $(".navbar").css("background", "white");
      $(".navbar").css("box-shadow", " 0 .125rem .25rem rgba(0,0,0,.075)");
      $(".nav-link").css("color", "black");
      $(".text-home").css("color", "black");
      $(".dropdown-content").css("background-color","white");
      $(".navbar-toggler-icons").css("background-image"," url(./images/black.svg) ");

      if ($(window).width() < 991) {
        $(".navbar-collapse").css("background-color","white");
     }
    
    }

    else {
      $(".navbar").css("background", "transparent");
      $(".nav-link").css("color", "rgba(255,255,255,.55)");
      $(".text-home").css("color", "black");
      $(".navbar").css("box-shadow", " none");
      $(".navbar-toggler-icons").css("background-image"," url(./images/white.svg) ");
      $(".dropdown-content").css("background-color","rgba(0, 0, 0, 0.767)");
      if ($(window).width() < 991) {
        $(".navbar-collapse").css("background-color","rgba(0, 0, 0, 0.781)");
     }
    }



  })
})

$("#arrow1").click(function(){
  // any value you need
  $(document).scrollTop((window.innerHeight)*0.8) 

  });

  $("#arrow2").click(function(){
    // any value you need
    $(document).scrollTop((window.innerHeight)*1.8) 
    
    });