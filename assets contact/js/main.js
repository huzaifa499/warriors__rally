$(function($) {
    "use strict";

    jQuery(document).ready(function() {

        // preloader
        $("#preloader").delay(300).animate({
            "opacity": "0"
        }, 500, function() {
            $("#preloader").css("display", "none");
        });

        // Scroll Top
        var ScrollTop = $(".scrollToTop");
        $(window).on('scroll', function() {
            if ($(this).scrollTop() < 500) {
                ScrollTop.removeClass("active");
            } else {
                ScrollTop.addClass("active");
            }
        });
        $('.scrollToTop').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        // Navbar Dropdown
        var dropdown_menu = $(".header-section .dropdown-menu");
        $(window).resize(function() {
            if ($(window).width() < 992) {
                dropdown_menu.removeClass('show');
            } else {
                dropdown_menu.addClass('show');
            }
        });
        if ($(window).width() < 992) {
            dropdown_menu.removeClass('show');
        } else {
            dropdown_menu.addClass('show');
        }

        // Autocomplete off
        $('input[type=text]').attr('autocomplete', 'off');

        // Sticky Header
        var fixed_top = $(".header-section");
        $(window).on("scroll", function() {
            if ($(window).scrollTop() > 50) {
                fixed_top.addClass("animated fadeInDown header-fixed");
            } else {
                fixed_top.removeClass("animated fadeInDown header-fixed");
            }
        });

        // Header Active
        $('.single-item .cart-btn').on('click', function() {
            $('.cart-content').toggleClass('active');
        });
        $('section').on('click', function() {
            $('.cart-content').removeClass('active');
        });
        $(".close-btn").click(function() {
            $('.cart-content').removeClass('active');
        });

    });
});