var app = app || {};

var spBreak = 767.98;

var offsetY = window.pageYOffset;
// Function Close Menu

app.init = function () {
  app.tabletViewport();
  app.smoothScroll();
  app.headerMenu();
  app.tabs();
  app.swiper();
  app.faq();
};

app.isMobile = function () {
  return window.matchMedia("(max-width: " + spBreak + "px)").matches;
};

app.closeMenu = function () {
  $("body").css({
    position: "static",
    top: "auto",
  });
  $(window).scrollTop(offsetY);
};

app.smoothScroll = function () {
  var anchors = $('a[href*="#"]:not([href="#"])');
  var headerHeight = 0;
  var speed = 500;

  var triggerScroll = function (context) {
    var href =
      typeof context == "string"
        ? context
        : "#" + $(context).attr("href").split("#")[1];
    if ($(context).hasClass("no-scroll")) return;
    if (!$(href).length) return;
    var position = $(href).offset().top - headerHeight;
    $("body, html").animate({ scrollTop: position }, speed, "swing");
    return false;
  };

  setTimeout(function () {
    scroll(0, 0);
    $("html").removeClass("is-loading").addClass("is-visible");
  }, 1);

  if (window.location.hash) {
    scroll(0, 0);
    var timeout = 500;
    if (
      navigator.userAgent.indexOf("MSIE ") > -1 ||
      navigator.userAgent.indexOf("Trident/") > -1
    ) {
      timeout = 0;
    }
    setTimeout(function () {
      triggerScroll(window.location.hash);
    }, timeout);
  }

  anchors.on("click", function () {
    return triggerScroll(this);
  });
};

app.tabs = function () {
  $(".js-tabs li").click(function () {
    var t = $(this).attr("data-tab");
    $(".js-tabs li").removeClass("current");
    $(".js-tab-content .tab-content").removeClass("current");
    $(this).addClass("current");
    $("#" + t).addClass("current");
  });
};

app.headerMenu = function () {
  const header = $("header");
  const btnMenu = header.find(".js-toggle-menu");
  const btnNavbar = header.find(".js-toggle-navbar");
  const menu = header.find(".js-header-menu");
  const navbar = header.find(".header-navigation");
  const btnMenuClose = header.find(".js-menu-close");

  btnMenu.on("click", () => {
    btnMenu.toggleClass("active");
    menu.toggleClass("active");
    if (btnMenu.hasClass("active")) {
      offsetY = window.pageYOffset;
      $("body").css({
        position: "fixed",
        top: -offsetY + "px",
        width: "100%",
      });
    } else {
      app.closeMenu();
    }
  });

  btnMenuClose.on("click", () => {
    btnMenu.removeClass("active");
    menu.removeClass("active");
    app.closeMenu();
  });

  btnNavbar.on("click", () => {
    btnNavbar.toggleClass("active");
    navbar.toggleClass("active");
    if (btnNavbar.hasClass("active")) {
      offsetY = window.pageYOffset;
      $("body").css({
        position: "fixed",
        top: -offsetY + "px",
        width: "100%",
      });
    } else {
      app.closeMenu();
    }
  });
};

app.swiper = function () {
  const swiper = new Swiper(".js-swiper", {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });

  const productSwiper = new Swiper(".js-product-swiper", {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 3,
        roundLengths: true,
        spaceBetween: 1,
        centeredSlides: true,
      },
    },
  });
};

app.tabletViewport = function () {
  var viewport = document.getElementById("viewport");

  var viewportSet = function () {
    var containerWidth = 1300;
    if (screen.width >= 768 && screen.width <= containerWidth) {
      viewport.setAttribute(
        "content",
        "width=" + containerWidth + ", user-scalable=0"
      );
      $("html").addClass("is-tablet");
    } else {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
      );
      $("html").removeClass("is-tablet");
    }
  };

  viewportSet();

  window.onload = function () {
    viewportSet();
  };

  window.onresize = function () {
    viewportSet();
  };
};

app.faq = function () {
  var element = $(".faq-block");
  element.on("click", ".block-question", function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).next(".block-answer").stop().slideDown();
    } else {
      $(this).next(".block-answer").stop().slideUp();
    }
  });

  $(element[0]).find(".block-question").trigger("click");
};

$(function () {
  app.init();
});
