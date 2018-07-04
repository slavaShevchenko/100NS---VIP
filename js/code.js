$(document).ready(function() {
    /* swiper */
    var swiperMain = new Swiper('.swiper-container--main', {
        loop: true,
        spaceBetween: 30,
        roundLengths: true,
        navigation: {
            nextEl: '.swiper-button-next--main',
            prevEl: '.swiper-button-prev--main',
        },
        pagination: {
            el: '.swiper-pagination--main',
        }
    });
    
    var swiperWinners = new Swiper('.swiper-container--winners', {
        spaceBetween: 30,
        roundLengths: true,
        slidesPerView: 4,
        pagination: {
            el: '.swiper-pagination--winners',
            clickable: true,
            renderBullet: function (index, className) {
                namesAr = this.slides;
                namesEl = $(namesAr[index]).data('tabname');
                return '<span class="' + className + '">' + namesEl + '</span>';
            }
        },
        breakpoints: {
            1499: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        }
    });
    
    
    
    /* mobile menu */
    $('.mobile-menu__trigger').on('click', function(e) {
        e.preventDefault;
        $('.mobile-menu').show().stop().animate({opacity: 1}, 300);
    });
    $('.mobile-menu__close').on('click', function(e) {
        e.preventDefault;
        $('.mobile-menu').stop().animate({opacity: 0}, 300, function() {
            $(this).hide();
        });
    });
});