import { onMounted } from "vue";

declare global {
  interface Window {
    jQuery: JQueryStatic;
  }
}

export function useJquery() {
  onMounted(() => {
    // Wait for window and jQuery to be defined
    const initPlugins = () => {
      if (typeof window === "undefined" || !window.jQuery) {
        setTimeout(initPlugins, 100);
        return;
      }

      const $ = window.jQuery;

      // Navbar scrolling background and links color
      //   $(window).on("scroll", function () {
      //     const bodyScroll = $(window).scrollTop() || 0;
      //     const navbar = $(".navbar");
      //     const logo = $(".navbar .logo> img");
      //     const navLinks = $(".navbar .nav-link");

      //     if (bodyScroll > 100) {
      //       navbar.addClass("nav-scroll");
      //       logo.attr("src", "/assets/img/logo.svg");
      //       navLinks.addClass("scrolled");
      //     } else {
      //       navbar.removeClass("nav-scroll");
      //       logo.attr("src", "/assets/img/logo_w.svg");
      //       navLinks.removeClass("scrolled");
      //     }
      //   });

      // Initialize ScrollIt
      if (typeof $.scrollIt === "function") {
        $.scrollIt({
          upKey: 38,
          downKey: 40,
          easing: "swing",
          scrollTime: 600,
          activeClass: "active",
          onPageChange: null,
          topOffset: -70,
        });
      }

      // Initialize Stellar
      if (
        typeof $.fn.stellar === "function" &&
        typeof window.requestAnimationFrame !== "undefined"
      ) {
        $(document).stellar({
          horizontalScrolling: false,
        });
      }

      // Initialize other plugins
      if (typeof $.fn.magnificPopup === "function") {
        $(".popup-img").magnificPopup({
          type: "image",
        });
      }

      // Initialize OwlCarousel
      if (typeof $.fn.owlCarousel === "function") {
        $(".owl-carousel").each(function (this: JQuery) {
          $(this).owlCarousel($(this).data());
        });
      }
    };

    initPlugins();
  });
}
