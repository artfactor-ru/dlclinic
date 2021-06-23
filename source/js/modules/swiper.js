import Swiper, { Scrollbar, Thumbs, Navigation, EffectCoverflow, Pagination, EffectFade, Autoplay, Mousewheel, Keyboard, Lazy } from 'swiper';

Swiper.use([Scrollbar, Thumbs, EffectFade, EffectCoverflow, Pagination, Navigation, Autoplay, Mousewheel, Keyboard, Lazy]);


// Баннеры с центрируемой картинкой
let swiperCentered = [];
document.querySelectorAll('.swiper-container--centered').forEach((element) => {
    swiperCentered = new Swiper(element, {
        loop: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 400,
            modifier: 1,
            slideShadows: true,
        },
    });
})

let swiperBanner;
// Варианты анимации потом удалить один
if (document.querySelector('.swiper-container--anim1')) {
    swiperBanner = new Swiper('.swiper-container--anim1', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        grabCursor: true,
        // autoHeight: true,
        centeredSlides: true,
        slidesPerView: '1',
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });


}


// Маленький слайдеры в до после
let smallSlider = [];
document.querySelectorAll('.news__img-wrap--slider').forEach((element, index) => {

    const slider = element.querySelector('.swiper-container--small');
    const next = element.querySelector(' .news__img-wrap swiper-button-next');
    const prev = element.querySelector(' .news__img-wrap swiper-button-prev');

    const pagination = element.querySelector('.swiper-pagination--small');
    smallSlider = new Swiper(slider, {
        loop: true,
        spaceBetween: 0,
        navigation: {
            nextEl: next,
            prevEl: prev,
        },
        pagination: {
            el: pagination,
            clickable: true,
        },

        // effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '1',

    });
})


let promoSlider = [];
document.querySelectorAll('.swiper-container--promo').forEach((element) => {
    promoSlider = new Swiper(element, {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-centered-wrapper--promo .swiper-button-next',
            prevEl: '.swiper-centered-wrapper--promo .swiper-button-prev',
        },
        // effect: 'coverflow',
        grabCursor: true,
        // centeredSlides: true,
        slidesPerView: '1',
        // coverflowEffect: {
        //     rotate: 0,
        //     stretch: 0,
        //     depth: 400,
        //     modifier: 1,
        //     slideShadows: true,
        // },
    });
})


let videoSlider = [];
document.querySelectorAll('.swiper-container--video').forEach((element) => {
    videoSlider = new Swiper(element, {
        loop: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // effect: 'coverflow',
        grabCursor: true,
        // centeredSlides: true,
        slidesPerView: '1',
        // Responsive breakpoints
        breakpoints: {

            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            1180: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    })
});

const beforeAfterSlider = document.querySelector('.before-after__slider');
const beforeAfterSwiper = new Swiper(beforeAfterSlider, {
    loop: false,
    spaceBetween: 0,
    navigation: {
        nextEl: '.before-after__wrapper .swiper-button-next',
        prevEl: '.before-after__wrapper .swiper-button-prev',
    },
    grabCursor: true,
    slidesPerView: '1',
})

const reviewsSlider = document.querySelector('.reviews__slider');
const reviewsSwiper = new Swiper(reviewsSlider, {
    loop: false,
    spaceBetween: 0,
    navigation: {
        nextEl: '.reviews__wrapper .swiper-button-next',
        prevEl: '.reviews__wrapper .swiper-button-prev',
    },
    grabCursor: true,
    slidesPerView: '1',
})

const certificateItems = document.querySelectorAll('.certificates__slider .swiper-slide');
if(certificateItems) {
    certificateItems.forEach((elem) => {
        elem.style.width = elem.querySelector('img').width + 'px';
    })
}
const certificatesSlider = document.querySelector('.certificates__slider');
const certificatesSwiper = new Swiper(certificatesSlider, {
    navigation: {
        nextEl: '.certificates__wrapper .swiper-button-next',
        prevEl: '.certificates__wrapper .swiper-button-prev',
    },
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
})