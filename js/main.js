(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  function owlInitialize() {
    let slider = $(".about-grid-slider-active");
    if ($(window).width() < 767) {
      slider.addClass("owl-carousel");
      slider.owlCarousel({
        loop: true,
        margin: 19,
        stagePadding: 0,
        responsiveClass: true,
        autoplay: true,
        nav: false,
        dots: false,
        navText: [
          '<span class="fas fa-chevron-left fa-2x"></span>',
          '<span class="fas fa-chevron-right fa-2x"></span>',
        ],
        responsive: {
          0: {
            items: 1,
            stagePadding: 30,
            autoWidth: true,
          },
          575: {
            items: 2,
            stagePadding: 0,
          },
        },
      });
    } else {
      slider.owlCarousel("destroy");
      slider.removeClass("owl-carousel");
    }
  }
  $(document).ready(function (e) {
    owlInitialize();
  });
  $(window).resize(function () {
    owlInitialize();
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // preloader
  $("#preloader").fadeOut(500);
});