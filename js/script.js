(function ($, root, undefined) {

    $(document).ready(function() {
        $('#slider').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2200,
            speed: 1000,
            fade: true,
            arrows: false,
        });

        $('header .menu').slicknav({
            'label': '',
            'easingOpen': 'swing',
            'easingClose': 'swing',
            appendTo: 'header nav',

            closedSymbol: '&#9658;',
            openedSymbol: '&#9660;',
        });

        $(window).on('load resize',function(e){
            if(window.innerWidth < 1024) {
                if(!$('.partners__list').hasClass('slick-initialized')){
                    mobileOnlySlider();
                }
            } else {
                if($('.partners__list').hasClass('slick-initialized')){
                    $('.partners__list').slick('unslick');
                }
            }
        });
    });

    function mobileOnlySlider() {
        $('.partners__list').slick({
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            speed: 1000,
            autoplaySpeed: 5000
        });
    }
    if(window.innerWidth < 768) {
        mobileOnlySlider();
    }

})(jQuery, this);
