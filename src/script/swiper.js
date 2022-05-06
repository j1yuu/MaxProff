$(document).ready(function () {
    if ($(window).width() <= 768) {
        $(".feedback__wrapper").slick({
            dots: true,
            customPaging: function (slider, i) {
                return '<div class="slick-dot"><img src="img/dot-inactive.svg" /><img src="img/dot-active.svg" /></div>';
            },
        });
        $(".prices__wrapper").slick({
            dots: true,
            centerMode: true,
            infinite: false,
            customPaging: function (slider, i) {
                return '<div class="slick-dot"><img src="img/dot-inactive.svg" /><img src="img/dot-active.svg" /></div>';
            },
        });

        $(".discounts__wrapper").slick({
            dots: true,
            arrows: false,
            customPaging: function (slider, i) {
                return '<div class="slick-dot"><img src="img/dot-inactive.svg" /><img src="img/dot-active.svg" /></div>';
            },
        });
        $('.channel__asfor').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.channel__slider'
        });
        $('.channel__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.channel__asfor',
            dots: true,
            customPaging: function (slider, i) {
                return '<div class="slick-dot"><img src="img/dot-inactive.svg" /><img src="img/dot-active.svg" /></div>';
            },
            arrows: false,
            centerMode: true,
            centerPadding: "10px",
            focusOnSelect: true
        });
    } else {
        $('.feedback__wrapper').slick('unslick');
        $('.prices__wrapper').slick('unslick');
        $('.discounts__wrapper').slick('unslick');
        $('.channel__asfor').slick('unslick');
        $('.channel__slider').slick('unslick');
    }
})

$(window).resize(function () {
    if ($(window).width() <= 768) {
        $(".feedback__wrapper").slick({
            dots: true,
            customPaging: function (slider, i) {
                return '<div class="slick-dot"><img src="img/dot-inactive.svg" /><img src="img/dot-active.svg" /></div>';
            },
        });

        $(".prices__wrapper").slick({
            dots: true,
            centerMode: true,
            inginite: false,
            customPaging: function (slider, i) {
                return '<div class="slick-dot"><img src="img/dot-inactive.svg" /><img src="img/dot-active.svg" /></div>';
            },
        });

        $(".discounts__wrapper").slick({
            dots: true,
            arrows: false,
            customPaging: function (slider, i) {
                return '<div class="slick-dot"><img src="img/dot-inactive.svg" /><img src="img/dot-active.svg" /></div>';
            },
        });
        $('.channel__asfor').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.channel__slider'
        });
        $('.channel__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.channel__asfor',
            dots: true,
            customPaging: function (slider, i) {
                return '<div class="slick-dot"><img src="img/dot-inactive.svg" /><img src="img/dot-active.svg" /></div>';
            },
            arrows: false,
            centerMode: true,
            centerPadding: "10px",
            focusOnSelect: true
        });
    } else {
        $('.feedback__wrapper').slick('unslick');
        $('.prices__wrapper').slick('unslick');
        $('.discounts__wrapper').slick('unslick');
        $('.channel__asfor').slick('unslick');
        $('.channel__slider').slick('unslick');
    }
});


$(".examples__wrapper").slick({
    dots: false,
    arrows: true,
    prevArrow: $('.ePrev'),
    nextArrow: $('.eNext')
});

$(".team-slider").slick({
    dots: true,
    customPaging: function (slider, i) {
        return '<div class="slick-dot"><img src="img/dot-inactive.svg" /><img src="img/dot-active.svg" /></div>';
    },
    arrows: true,
    prevArrow: $('.tPrev'),
    nextArrow: $('.tNext'),
});

$(".masters__slider").slick({
    dots: true,
    customPaging: function (slider, i) {
        return '<div class="slick-dot"><img src="img/dot-inactive.svg" /><img src="img/dot-active.svg" /></div>';
    },
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    prevArrow: $('.mPrev'),
    nextArrow: $('.mNext'),
    centerMode: true,
    centerPadding: "15%",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            },
        }
    ]
});

