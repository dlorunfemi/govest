import "bootstrap";
import jQuery from "jquery";



jQuery(
  (function ($) {
    "use strict";

    // Page Loader
    $(window).on("load", function () {
      console.log("done");
      $(".page-loader").addClass("page-loaded");
    });

    // Menubar
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 120) {
        $(".menubar").addClass("sticky");
      } else {
        $(".menubar").removeClass("sticky");
      }
    });

    // Go to Top
    $(function () {
      // Scroll Event
      $(window).on("scroll", function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $(".go-top").addClass("active");
        if (scrolled < 600) $(".go-top").removeClass("active");
      });
      // Click Event
      $(".go-top").on("click", function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
      });
    });
  })(jQuery)
);

import '../scss/govest.scss'