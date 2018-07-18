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
        mousewheel: {
            releaseOnEdges: true
        },
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
    
    var swiperTabs = new Swiper('.swiper-container--tabs', {
        autoHeight: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination--tabs',
            clickable: true,
            renderBullet: function (index, className) {
                namesAr = this.slides;
                namesEl = $(namesAr[index]).data('tabname');
                return '<span class="' + className + '">' + namesEl + '</span>';
            }
        }
    });
    
    var tempSlide, finalActiveSlide;
    var swiperProductImgThumbs = new Swiper('.swiper-container--product-img-thumbs', {
        slidesPerView: 3,
        spaceBetween: 30,
        slideToClickedSlide: true,
        breakpoints: {
            575: {
                spaceBetween: 15
            }
        },
        navigation: {
            nextEl: '.swiper-button-next--product-img-thumbs',
            prevEl: '.swiper-button-prev--product-img-thumbs',
        },
        on: {
            init: function() {
                $('.swiper-container--product-img-thumbs').find('.swiper-slide-active').find('.product__thumb-item-img').addClass('product__thumb-item-img--active');
            },
            click: function() {
                if(this.clickedIndex !== undefined && this.activeIndex <= this.clickedIndex) {
                    tempSlide = this.clickedSlide;
                    $('.swiper-container--product-img-thumbs').find('.product__thumb-item-img--active').removeClass('product__thumb-item-img--active');
                    $(tempSlide).find('.product__thumb-item-img').addClass('product__thumb-item-img--active');
                    finalActiveSlide = $('.swiper-container--product-img-thumbs').find('.product__thumb-item-img--active').parents('.swiper-slide').index();
                    swiperProductImg.slideTo(finalActiveSlide);
                }
            },
            slideChangeTransitionEnd: function() {
                if(this.clickedIndex !== undefined && this.isEnd) {}
                else {
                    $('.swiper-container--product-img-thumbs').find('.product__thumb-item-img--active').removeClass('product__thumb-item-img--active');
                    $('.swiper-container--product-img-thumbs').find('.swiper-slide-active').find('.product__thumb-item-img').addClass('product__thumb-item-img--active');
                    finalActiveSlide = $('.swiper-container--product-img-thumbs').find('.product__thumb-item-img--active').parents('.swiper-slide').index();
                    swiperProductImg.slideTo(finalActiveSlide);
                    this.clickedIndex = undefined;
                }
            }
        }
    });
    var swiperProductImg = new Swiper('.swiper-container--product-img', {
        spaceBetween: 30,
        on: {
            slideChange: function() {
                swiperProductImgThumbs.slideTo(this.activeIndex);
                tempSlide = swiperProductImgThumbs.slides[this.activeIndex];
                $('.swiper-container--product-img-thumbs').find('.product__thumb-item-img--active').removeClass('product__thumb-item-img--active');
                $(tempSlide).find('.product__thumb-item-img').addClass('product__thumb-item-img--active');
            }
        }
    });
    
    
    
    /* mobile menu */
    $('.mobile-menu__trigger').on('click', function(event) {
        event.preventDefault;
        $(this).addClass('mobile-menu__trigger--active');
        event.stopPropagation();
    });
    $(document).on('click', function(event) {
        if($('.mobile-menu__trigger--active').length) {
            if($(event.target).closest('.mobile-menu').length) return;
            $('.mobile-menu__trigger').removeClass('mobile-menu__trigger--active');
            event.stopPropagation();
        }
    });
    
    
    
    /* telephone mask */
    $('input[type="tel"]').mask("(+234) 99 - 999 - 99 - 99");
    
    
    
    /* select2 */
    if($('.select2-item').length) {
        $('.select2-item').select2({
            width : '100%',
            minimumResultsForSearch: Infinity,
            theme: 'vip100ns'
        });
    }
    
    $('.select2-item').on('select2:open', function(e){
        $('.select2-results__options').scrollbar().parent().addClass('scrollbar-inner');
    });
    
    
    
    /* more-less */
    var valTemp;
    $('.more-less__button--more').on('click', function() {
		valTemp = Number($(this).parents('.more-less').find('.more-less__input').val());
		valTemp = valTemp + 100;
		$(this).parents('.more-less').find('.more-less__input').val(valTemp);
	});
	$('.more-less__button--less').on('click', function() {
		valTemp = Number($(this).parents('.more-less').find('.more-less__input').val());
		valTemp = valTemp - 100;
		if(valTemp <= 0) {}
		else {
			$(this).parents('.more-less').find('.more-less__input').val(valTemp);
		}
	});
});