//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend jquery.fancybox.min.js
//@prepros-prepend owl.carousel.min.js

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/course-ie.min.css";
    head.appendChild(link);
}

$(document).ready(function () {
    /* Якорь */
    $(function () {
        $("a[href^='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
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