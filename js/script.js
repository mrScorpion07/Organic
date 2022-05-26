$(function () {
    'use strict'
    // Trendy Venobox
    new VenoBox({
        selector: '.pdc_veno',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });


    // Mixit It up
    var containerEl = document.querySelector('.mixit_up');
    var mixer = mixitup(containerEl)

    // Flash Deals Countdown
    $('.flash_offer').countdown('2023/05/01', function (event) {
        $(this).html(event.strftime('%D'));
    });

    $('.flash_offer2').countdown('2023/05/01', function (event) {
        $(this).html(event.strftime('%H'));
    });

    $('.flash_offer3').countdown('2023/05/01', function (event) {
        $(this).html(event.strftime('%M'));
    });

    $('.flash_offer4').countdown('2023/05/01', function (event) {
        $(this).html(event.strftime('%S'));
    });

    // Mixit Up 2
    $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    $('.mixit_btn5').click(function () {
        var selector = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: selector
        });

    });

    // Testmonial Slider
    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '<i class="fa-solid fa-right-long nxt_arr"></i>',
        prevArrow: '<i class="fa-solid fa-left-long prv_arr"></i>',

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // Menu Fix
    var navoff = $('.main_menu').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix')
        }
    });

    // Back TO Top 
    $('.bc_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.bc_top').fadeIn();
        } else {
            $('.bc_top').fadeOut();
        }
    });

});