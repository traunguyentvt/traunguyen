// Wrap the code in a function to avoid polluting the global namespace
(function ($) {
    "use strict";

    // Cache frequently used elements
    var nav = $('nav');
    var navHeight = nav.outerHeight();
    var mainNav = $('#mainNav');
    var navbarCollapse = $('.navbar-collapse');
    var scrolltopMf = $('.scrolltop-mf');

    // Function to handle scrolling behavior
    function handleScroll() {
        var pixels = 50;
        var top = 1200;

        // Navbar Reduce and Transform
        if ($(window).scrollTop() > pixels) {
            mainNav.addClass('navbar-reduce').removeClass('navbar-trans');
        } else {
            mainNav.addClass('navbar-trans').removeClass('navbar-reduce');
        }

        // Scroll to Top Button
        if ($(window).scrollTop() > top) {
            scrolltopMf.fadeIn(1000, "easeInOutExpo");
        } else {
            scrolltopMf.fadeOut(1000, "easeInOutExpo");
        }
    }

    // Handle navbar toggle click
    $('.navbar-toggler').on('click', function () {
        if (!mainNav.hasClass('navbar-reduce')) {
            mainNav.addClass('navbar-reduce');
        }
    });

    // Preloader
    $(window).on('load', function () {
        var preloader = $('#preloader');
        if (preloader.length) {
            preloader.delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });

    // Back to top button click event
    $('.back-to-top, .scrolltop-mf').on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Smooth scrolling for anchor links
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - navHeight + 5)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Collapse responsive menu when a scroll trigger link is clicked
    $('.js-scroll').on("click", function () {
        navbarCollapse.collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
    });

    // Scroll event listener
    $(window).on('scroll', function () {
        handleScroll();
    });

    /*--/ Star Typed /--*/
    if ($('.text-slider').length === 1) {
        var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });
    }

    /*--/ Testimonials owl /--*/
    $('#testimonial-mf').owlCarousel({
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });

})(jQuery);
