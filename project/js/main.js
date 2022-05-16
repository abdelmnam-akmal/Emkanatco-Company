$(function () {
    'use strict';

    // active mixitup shuffle plugin
    $("#portfolio-container").mixItUp();

    // hide the popup
    $('.popup').on('click', function () {
        $(this).animate({
            opacity: 0
        }, 500);
        $(this).removeClass('special');
    });

    // stop closing popup on click the image or icon
    $('.popup .popup-container').on('click', function (e) {
        e.stopPropagation();
    });

    // window on scroll functions
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('.carousel-content').offset().top) {
            $('.navbar').addClass('navbar-fixed');
        } else {
            $('.navbar').removeClass('navbar-fixed');
        }
    });


    // add class active under navbar links
    $('.navbar .nav-link').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active');
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 500);
    });


    // images on click add Class Active to the image
    $('.portfolio .portfolio-container .image-portfolio .image-cont img').on('click', function () {
        $(this).parent().parent().addClass('selected').siblings().removeClass('selected');
        $('.popup').addClass('special');
        $('.popup').animate({
            opacity: 1 
        }, 500);
        $('.popup .popup-container div img').attr('src', $(this).attr('src'));
        $('html, body').animate({
            scrollTop: $(this).parent().parent().offset().top
        }, 800);
    });

    // popup images on click right and left change images
    $('.popup .popup-container .right').on('click', function () {
        if ($('.portfolio .portfolio-container .selected').is(":last-child")) {
            $('.portfolio .portfolio-container .image-portfolio:first-child').find('img').click();
        } else {
            $('.portfolio .portfolio-container .selected').next().find('img').click();
        }
    });
    $('.popup .popup-container .left').on('click', function () {
        if ($('.portfolio .portfolio-container .selected').is(":first-child")) {
            $('.portfolio .portfolio-container .image-portfolio:last-child').find('img').click();
        } else {
            $('.portfolio .portfolio-container .selected').prev().find('img').click();
        }
    });
    // End Functions to Popup Gallary

});