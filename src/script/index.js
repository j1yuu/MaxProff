$(document).ready(function () {
    $('#mf-tel').inputmask({ "mask": "+7 (999) 999-99-99" });

    if ($(window).width() <= 768) {
        $('.header-select').click(function () {
            $(this).toggleClass('header-select--active');
            $(this).find('.header-select__body').toggleClass('header-select__body--active');

            if ($(this).hasClass('header-select--active')) {
                $(this).find('.header-select__img').css('transform', 'rotate(0deg)')
            } else {
                $(this).find('.header-select__img').css('transform', 'rotate(90deg)')
            }
        });
    } else {
        $('header-select').removeClass('header-select--active');
        $('header-select__body').removeClass('header-select__body--active');
    };

    $('.header__burger').click(function () {
        $('.header-lower').addClass('header-lower--active');
        $('.header').addClass('header-active');
        $('.body').addClass('body-active');
    });

    $('.header-lower__cross').click(function () {
        $('.header-lower').removeClass('header-lower--active');
        $('.header').removeClass('header-active');
        $('.body').removeClass('body-active');
    });

    $('.button-modal').click(function () {
        $('.modal').addClass('modal-active');
        $('.body').addClass('body-modal');
    });

    $('.modal').click(function () {
        $('.modal').removeClass('modal-active');
        $('.body').removeClass('body-modal');
    })

    document.onkeydown = function (evt) {
        evt = evt || window.event;
        var isEscape = (evt.key === "Escape" || evt.key === "Esc");

        if (isEscape) {
            $('.modal').removeClass('modal-active');
            $('.body').removeClass('body-modal');
        }
    };
});


$(window).resize(function () {
    if ($(window).width() <= 768) {
        $('.header-select').click(function () {
            $(this).toggleClass('.header-select--active');
            $(this).find('.header-select__body').toggleClass('header-select__body--active');

            if ($(this).hasClass('.header-select--active')) {
                $(this).find('.header-select__img').css('transform', 'rotate(0deg)')
            } else {
                $(this).find('.header-select__img').css('transform', 'rotate(90deg)')
            }
        })
    } else {

    }
})

var $faqQuestion = $('.faq__question');
var $faqTab = $('.faq__tab');

$faqQuestion.click(function () {
    $(this).parent($faqTab).toggleClass('faq__active');
    $faqQuestion.not($(this)).each(function () {
        $(this).parent($faqTab).removeClass('faq__active');
    })
});

const mainForm = document.getElementById('mainForm');
const validation1 = new JustValidate(mainForm);
const mtype = document.getElementsByName('type');

validation1
    .addRequiredGroup(
        '#kindGroup',
        '?????????????????????? ?? ????????????!'
    )
    .addRequiredGroup(
        '#typeGroup',
        '?????????????????????? ?? ????????????!'
    )
    .addRequiredGroup(
        '#amountGroup',
        '?????????????????????? ?? ????????????!'
    )
    .addField(
        '#squareGroup1', [
        {
            rule: 'required',
            errorMessage: '?????????????? ????????????'
        }
    ]
    )
    .addField(
        '#squareGroup2', [
        {
            rule: 'required',
            errorMessage: '?????????????? ????????????'
        }
    ]
    )
    .addField('#mf-tel', [{
        rule: 'required',
        value: true,
        errorMessage: '?????????????? ?????????? ????????????????!'
    },
    ]).onSuccess(() => {
        const sendForm = (data) => {
            return fetch('mail.php', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }).then(res => res.json())
        };

        const dataform = new FormData(mainForm),
            user = {};

        dataform.forEach((val, key) => {
            user[key] = val;
        });

        sendForm(user).then(data => {
            console.log('????????????????????');
        });

        mainForm.reset();

        $('.modal').addClass('modal-active');
        $('.body').addClass('body-modal');
    });