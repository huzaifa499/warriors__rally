$(function($) {
    "use strict";

    jQuery(document).ready(function() {

        /* niceSelect */
        $("select").niceSelect();

        // counter Up
        if (document.querySelector('.counter') !== null) {
            $('.counter').counterUp({
                delay: 10,
                disableOn: 0,
                time: 2000
            });
        }

        /* Magnific Popup */
        if (document.querySelector('.popupvideo') !== null) {
            $('.popupvideo').magnificPopup({
                disableOn: 300,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
            });
        }

        /* Wow js */
        new WOW().init();

        // game-carousel
        $(".game-carousel").not('.slick-initialized').slick({
            infinite: true,
            autoplay: true,
            centerMode: true,
            centerPadding: "0px",
            focusOnSelect: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class=\"icon-e-double-right-arrow\"  aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class=\"icon-e-double-right-arrow\"  aria-hidden='true'></i></button>",
            dots: false,
            dotsClass: 'section-dots',
            customPaging: function(slider, i) {
                var slideNumber = (i + 1),
                    totalSlides = slider.slideCount;
                return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
            }
        });

        // product-carousel
        $(".product-carousel").not('.slick-initialized').slick({
            infinite: true,
            autoplay: true,
            centerMode: true,
            centerPadding: "0px",
            focusOnSelect: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class=\"icon-e-double-right-arrow\"  aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class=\"icon-e-double-right-arrow\"  aria-hidden='true'></i></button>",
            dots: false,
            dotsClass: 'section-dots',
            customPaging: function(slider, i) {
                var slideNumber = (i + 1),
                    totalSlides = slider.slideCount;
                return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
            },
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        // stream-carousel
        $(".stream-carousel").not('.slick-initialized').slick({
            infinite: true,
            autoplay: true,
            centerMode: true,
            centerPadding: "0px",
            focusOnSelect: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class=\"icon-e-double-right-arrow\"  aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class=\"icon-e-double-right-arrow\"  aria-hidden='true'></i></button>",
            dots: false,
            dotsClass: 'section-dots',
            customPaging: function(slider, i) {
                var slideNumber = (i + 1),
                    totalSlides = slider.slideCount;
                return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
            },
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        // Shop Details Slide
        if (document.querySelector('.all-slider') !== null) {
            $('.all-slider').owlCarousel({
                loop: false,
                dots: false,
                nav: false,
                margin: 10,
                navigation: false,
                autoplay: false,
                items: 3,
                autoplayTimeout: 1000,
                smartSpeed: 1000,
                responsive: {
                    0: {
                        items: 2
                    },
                    768: {
                        items: 3
                    }
                }
            });
        }

        // testimonials-carousel
        $(".testimonials-carousel").not('.slick-initialized').slick({
            infinite: true,
            autoplay: true,
            centerMode: true,
            centerPadding: "0px",
            focusOnSelect: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class=\"icon-a-left-arrow\"  aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class=\"icon-b-right-arrow\"  aria-hidden='true'></i></button>",
            dots: false,
            dotsClass: 'section-dots',
            customPaging: function(slider, i) {
                var slideNumber = (i + 1),
                    totalSlides = slider.slideCount;
                return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
            },
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

    });
});