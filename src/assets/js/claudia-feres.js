/*
  1. preloader
  2. fadeIn.element
  3. scrollMagic
  4. slick slider
    4-1. slick left about slider
    4-2. slick right about slider
    4-3. slick schedule slider, slick news slider
  5. owl carousel
    5-1. owl testimonials carousel
    5-2. owl home subtitle carousel
    5-3. owl photos IMG carousel
    5-4. owl videos IMG carousel
  6. forms
    6-1. newsletter form
  7. YouTube player
  8. fullPage
  9. navigation
    9-1. navigation active state
  10. toggle news content
  11. mobile devices
  12. to top arrow animation
  13. height reset
  14. main menu toggler
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
		
        // 3. scrollMagic
        var controller = new ScrollMagic.Controller();
        // DARK mode
        var trigger = $(".dark-logo");
        $.each(trigger, function(index, element) {
            var this_element = $(element);
            var element_height = this_element.outerHeight();

            function getElementHeight(element) {
                return this_element.outerHeight();
            }
            var logo_scene = new ScrollMagic.Scene({
                triggerElement: element,
                triggerHook: 0,
                duration: element_height,
                offset: -110,
            }).setClassToggle(".logo", "logo-dark").addTo(controller).on("enter", function(e) {
                $(".logo").addClass("logo-dark");
                $(".main-menu").addClass("main-menu-dark");
            }).on("leave", function(e) {
                $(".logo").removeClass("logo-dark");
                $(".main-menu").removeClass("main-menu-dark");
            });
            $(window).on("resize", function() {
                logo_scene.duration(getElementHeight(this_element));
            });
        });
        // DARK mode INVERSE
        var trigger = $(".dark-logo-inverse");
        $.each(trigger, function(index, element) {
            var this_element = $(element);
            var element_height = this_element.outerHeight();

            function getElementHeight(element) {
                return this_element.outerHeight();
            }
            var logo_scene = new ScrollMagic.Scene({
                triggerElement: element,
                triggerHook: 0,
                duration: element_height,
                offset: -110,
            }).setClassToggle(".logo", "logo-dark").addTo(controller).on("enter", function(e) {
                $(".logo").removeClass("logo-light");
                $(".main-menu").addClass("main-menu-dark");
            }).on("leave", function(e) {
                $(".logo").addClass("logo-light");
                $(".main-menu").removeClass("main-menu-dark");
            });
            $(window).on("resize", function() {
                logo_scene.duration(getElementHeight(this_element));
            });
        });
    });
	
    // 4. slick slider
    // 4-1. slick left about slider
    $(".slick-left-about").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',
        fade: false,
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 500
    });
    // 4-2. slick right about slider
    $(".slick-right-about").slick({
        arrows: true,
        initialSlide: 0,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',
        fade: false,
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 500
    });
    // 4-3. slick schedule slider, slick news slider
    $(".slick-schedule, .slick-news").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',
        fade: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 500
    });
	
    // 5. owl carousel
    // 5-1. owl testimonials carousel
    $("#testimonials-carousel").owlCarousel({
        loop: true,
        center: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: false,
        navText: ["<i class='owl-custom fa fa-arrow-left'></i>", "<i class='owl-custom fa fa-arrow-right'></i>"]
    });
    // 5-2. owl home subtitle carousel
    $(".home-page-subtitle-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        center: true,
        dots: false,
        nav: false,
        touchDrag: false,
        mouseDrag: false,
        pullDrag: false,
        responsiveRefreshRate: 50
    });
    // 5-3. owl photos IMG carousel
    $("#photos-page-img-carousel").owlCarousel({
        loop: true,
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom fa fa-chevron-left'></i>", "<i class='owl-custom fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
    // 5-4. owl videos IMG carousel
    $("#videos-page-img-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom fa fa-chevron-left'></i>", "<i class='owl-custom fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
	
    // 6. forms
    // 6-1. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
	
    // 7. YouTube player
    $("#background-video").YTPlayer({
        videoId: "OpMqIlnE7x0",
        mute: true,
        pauseOnScroll: false,
        repeat: true,
        fitToBackground: true,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: "transparent",
            branding: 0,
            rel: 0,
            autohide: 0
        }
    });
	
    // 8. fullPage
    $("#fullpage").fullpage({
        // anchors: ["home", "about", "photos", "schedule", "videos", "news", "contact"],
		anchors: ["home", "bio", "projects", "photos", "videos", "omj", "emj", "contact"],
        navigation: true,
        navigationPosition: "left",
        // navigationTooltips: ["Home", "About", "Photos", "Schedule", "Videos", "News", "Contact"],
		navigationTooltips: ["INÍCIO", "BIOGRAFIA", "PROJETOS", "FOTOS", "VIDEOS", "ORQUESTRA MUNICIPAL DE JUNDIAÍ", "ESCOLA DE MÚSICA DE JUNDIAÍ", "CONTATO"],
        responsiveWidth: 900,
        autoScrolling: false,
        scrollBar: false,
		fitToSection: false,
        afterResponsive: function(isResponsive) {}
    });
	
    // 9. navigation
    $(".navigation-fire").on("click", function(e) {
        $(this).toggleClass("open");
        $("nav.navigation-menu").toggleClass("show");
    });
    $("nav.navigation-menu a").on("click", function(e) {
        var hash = $(this.hash);
        $("nav").removeClass("show");
        $(".navigation-fire").removeClass("open");
        $(".main-menu").removeClass("active");
    });
    // 9-1. navigation active state
    $("a.menu-state").on("click", function() {
        $("a.menu-state").removeClass("active");
        $(this).addClass("active");
    });
	
    // 10. toggle news content
    $(".toggle-page-content-1").on("click", function() {
        if ($(".panel-left-1, .panel-right-1").hasClass("open")) {
            $(".panel-left-1, .panel-right-1").removeClass("open");
            $(".panel-left-1, .panel-right-1").addClass("close");
        } else {
            $(".panel-left-1, .panel-right-1").removeClass("close");
            $(".panel-left-1, .panel-right-1").addClass("open");
        }
    });

    $(".toggle-page-content-2").on("click", function() {
        if ($(".panel-left-2, .panel-right-2").hasClass("open")) {
            $(".panel-left-2, .panel-right-2").removeClass("open");
            $(".panel-left-2, .panel-right-2").addClass("close");
        } else {
            $(".panel-left-2, .panel-right-2").removeClass("close");
            $(".panel-left-2, .panel-right-2").addClass("open");
        }
    });
	
    // 11. mobile devices
	if (navigator.userAgent.match(/Android/i) ||
	    navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/) || 
		navigator.userAgent.match(/Windows Phone/i) || 
		navigator.userAgent.match(/ZuneWP7/i)
		) {
        $('#fullpage .section').css('min-height', '0px');
    }
	
    // 12. to top arrow animation
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 400) {
            $(".to-top-arrow").addClass("show");
        } else {
            $(".to-top-arrow").removeClass("show");
        }
    });


});


// 13. height reset
$(".reset-about-btn").on("click", function() {
    target = $(".panel-right-full");
    $("html, body").animate({
        scrollTop: target.offset().top
    }, 500);
});
$(".reset-photos-btn").on("click", function() {
    target = $(".photos-page-img-wrapper");
    $("html, body").animate({
        scrollTop: target.offset().top
    }, 500);
});
$(".reset-schedule-btn").on("click", function() {
    target = $(".panel-right-full-schedule");
    $("html, body").animate({
        scrollTop: target.offset().top
    }, 500);
});
// $(".reset-videos-btn").on("click", function() {
//     target = $(".videos-page-img-wrapper");
//     $("html, body").animate({
//         scrollTop: target.offset().top
//     }, 500);
// });

// 14. main menu toggler
var el = document.getElementsByClassName("main-menu");
var el_length = el.length;
for (i = 0; i < el_length; i++) {
    el[i].addEventListener("click", function() {
        this.classList.toggle("active");
    })
}

