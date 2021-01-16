(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on("load", function () {
    if ($("#loading").length) {
      $("#loading")
        .delay(400)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $(".main-nav-v a, .mobile-nav-v a, .scrollto").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-scrolled")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".main-nav-v, .mobile-nav-v").length) {
          $(".main-nav-v .active, .mobile-nav-v .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".main-nav-v, .mobile-nav-v");
  var main_nav_height = $("#header").outerHeight();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function () {
      var top = $(this).offset().top - main_nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find("li").removeClass("active");
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
    });
  });

  var owl = $("#glimps .carousel-wrap .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    center: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    lazyLoad: true,
    lazyLoadEager: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1.9,
        nav: true,
      },
      1000: {
        items: 2.2,
        nav: true,
      },
    },
    dotClass: "owl-dot",
    dots: true,
  });

  $("#glimps .owl-filter-bar").on("click", ".item", function () {
    var $item = $(this);
    var filter = $item.data("owl-filter");

    owl.owlcarousel2_filter(filter);
  });

  //flitering in glimps
  $(document).ready(function () {
    $(".list").click(function () {
      const value = $(this).attr("data-filter");
      if (value == "all") {
        $("#glimps .carousel-cell").show("1000");
      } else {
        $("#glimps .carousel-cell")
          .not("." + value)
          .hide("1000");
        $("#glimps .carousel-cell")
          .filter("." + value)
          .show("1000");
      }
    });
    //add active class on selected
    $(".list").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });

  // jQuery counterUp (used in what we do section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });
})(jQuery);

const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
const btnText = document.getElementById("myBtn");

btnText.addEventListener("click", readMore);

function readMore() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const dots3 = document.getElementById("dots3");
const moreText3 = document.getElementById("more3");
const btnText3 = document.getElementById("myBtn3");

btnText3.addEventListener("click", readMore3);

function readMore3() {
  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
  }
}

const boxes = document.querySelectorAll(".about-extra");
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// mobile navigation
function myFunction() {
  var x = document.getElementById("menu1");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
  document.querySelector("#nav1").classList.toggle("nav--open1");
}

function myFunction1() {
  var x = document.getElementById("menu1");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  }
}

myFunction();
myFunction1();

const nav = document.querySelector("#nav1");
const menu = document.querySelector("#menu1");
const menuToggle = document.querySelector(".nav__toggle1");
let isMenuOpen = false;

menuToggle.addEventListener("click", (e) => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
  nav.classList.toggle("nav--open1");
});

nav.addEventListener("keydown", (e) => {
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }

  const menuLinks = menu.querySelectorAll(".nav__link1");
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});

