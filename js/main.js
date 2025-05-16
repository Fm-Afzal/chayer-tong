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

  $(document).ready(function () {
    const $btn = $('#scrollToTopBtn');

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 50) {
        $btn.removeClass('hidden').addClass('flex');
      } else {
        $btn.removeClass('flex').addClass('hidden');
      }
    });

    $btn.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
    });
  });
});
