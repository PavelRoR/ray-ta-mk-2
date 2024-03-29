//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend jquery.fancybox.min.js
//@prepros-prepend owl.carousel.min.js

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.min.css";
    head.appendChild(link);
}

$(document).ready(function () {
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this),
            button = $('.button-modal', this);
        //     switch_title = $('.switch-title'),
        //     switch_text = $('.switch-text'),
        //     modal_text = $('.modal-text'),
        //     last_container_title = $('.last-container-title'),
        //     currDate = new Date(),
        //     startDate = new Array(
        //         new Date("September 19 2019 18:30 UTC+3"),
        //         new Date("September 20 2019 18:30 UTC+3")),
        //     endDate = new Array(
        //         new Date("September 19 2019 21:00 UTC+3"),
        //         new Date("September 20 2019 21:00 UTC+3")),
        //     rooms = new Array(
        //         'https://start.bizon365.ru/room/18087/herbal_science',
        //         'https://start.bizon365.ru/room/18087/herbal_science_d2');

        // function roomSwitch() {
        //     modal_text.hide();
        //     last_container_title.hide();
        //     switch_title.removeClass('hide').html('А Вы записались на БЕСПЛАТНЫЙ ВЕБИНАР?<br>ЖДЕМ ТОЛЬКО ВАС!');
        //     switch_text.removeClass('hide').html('<span class="hurryup">Скорее ЗАХОДИТЕ прямо СЕЙЧАС на вебинар!</span><br>Присоединяйтесь к интенсиву и окунитесь в мир практической философии! Познайте этот мир и себя в нём!');
        //     button.text('Зайти!');
        // }
        // if ((currDate > startDate[0] && currDate < endDate[0]) || (currDate > startDate[1] && currDate < endDate[1])) {
        //     roomSwitch();
        // }
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this),
                button = $('.button-modal ', this);
            if (!email.val().match(reNone)) {
                email.css({
                    "borderColor": "red",
                    'transition': 'all .4s ease'
                });
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                // if (currDate > startDate[0] && currDate < endDate[0]) {
                //     window.open(rooms[0]);
                // }
                // if (currDate > startDate[1] && currDate < endDate[1]) {
                //     window.open(rooms[1]);
                // }
                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
                return true
            }
        });
        email.click(function () {
            email.css({
                "borderColor": "rgba(69, 100, 211, .5)",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });
    $(function () {
        $('.button-more').click(function () {
            var l = $(this).attr('data-name');
            if (this.innerText == 'Развернуть ∨') {
                this.innerText = 'Свернуть ∧';
                $('#' + l).slideDown(500);
            } else {
                this.innerText = 'Развернуть ∨';
                $('#' + l).slideUp(500);
            }
        });
    });
    $(function () {
        $('#text-revs').owlCarousel({
            slideSpeed: 200,
            paginationSpeed: 200,
            items: 3,
            loop: true,
            margin: 20,
            nav: true,
            navText: ["‹", "›"],
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                485: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
    });
    $(function () {
        $("[data-fancybox]").fancybox({
            buttons: [
                'slideShow',
                'share',
                'zoom',
                'fullScreen',
                // 'download',
                'close'
            ],
            speed: 330,
            loop: true,
            opacity: "auto",
            // autoScale: true,
            mouseWheel: true,
            transitionEffect: 'slide'
        });
    });
    /*Конец документа*/
});