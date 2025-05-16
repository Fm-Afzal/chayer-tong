var $ = jQuery.noConflict();

$(function () {

  /* Show Header when scroll up */
  /* ------------------------------------------- */
  var lastScrollTop = 0;
  var $header = $("header");
  var headerHeight = $header.outerHeight();

  $(window).scroll(function () {
    var windowTop = $(window).scrollTop();

    if (windowTop >= headerHeight) {
      $header.addClass("header-sticky");
    } else {
      $header.removeClass("header-sticky");
      $header.removeClass("header-show");
    }

    if ($header.hasClass("header-sticky")) {
      if (windowTop < lastScrollTop) {
        $header.addClass("header-show");
      } else {
        $header.removeClass("header-show");
      }
    }
    lastScrollTop = windowTop;
  });

  // Sticky Menu
  $(".toggle-menu").on("click", function () {
    $("body").toggleClass("menu-extended");
    $("header").toggleClass("nav-open");
    $(".main--menu").removeClass("sub-menu-open");
    $(".menu-item-has-children").removeClass("open");
  });
});