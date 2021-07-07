import Swiper, { Scrollbar, Thumbs, Navigation, EffectCoverflow, Pagination, EffectFade, Autoplay, Mousewheel, Keyboard, Lazy } from 'swiper';

Swiper.use([Scrollbar, Thumbs, EffectFade, EffectCoverflow, Pagination, Navigation, Autoplay, Mousewheel, Keyboard, Lazy]);

function updateSlider(slider) {
    if (slider != undefined) {
        if (Array.isArray(slider)) {
            if (slider.length != 0) {

                for (let i = 0; i < slider.length; i++) {
                    slider[i].update();
                }
            }
        } else {
            slider.update();


        }

    }
}

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
        speed: 1500,
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
        autoplay: {
            delay: 5000,
        },
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
    const next = element.querySelector('.news__img-wrap swiper-button-next');
    const prev = element.querySelector('.news__img-wrap swiper-button-prev');
    const pagination = element.querySelector('.swiper-pagination--small');


    smallSlider = new Swiper(slider, {
        loop: false,
        speed: 1500,
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

// Все простые слайдеры как до после , отзывы
let innerSlider = [];
document.querySelectorAll('.slider__inner').forEach((element) => {
    const container = element.querySelector('.swiper-container');
    const prev = element.querySelector('.swiper-button-prev');
    const next = element.querySelector('.swiper-button-next');

    innerSlider = new Swiper(container, {
        // loop: true,
        speed: 1500,
        spaceBetween: 10,
        navigation: {
            nextEl: next,
            prevEl: prev,
        },
        grabCursor: true,
        slidesPerView: '1',

    });
})


// Слайдер в технологии с видео
let videoSlider = [];
document.querySelectorAll('.swiper-container--video').forEach((element) => {
    videoSlider = new Swiper(element, {
        loop: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 1500,
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



// const certificateItems = document.querySelectorAll('.certificates__slider .swiper-slide');
// if (certificateItems) {
//     certificateItems.forEach((elem) => {
//         elem.querySelector('img').addEventListener('load', function() {
//             elem.style.width = elem.querySelector('img').width + 'px';
//         })

//     })
// }

let certificatesSwiper;
if (document.querySelector('.certificates__slider')) {
    certificatesSwiper = new Swiper('.certificates__slider', {
        navigation: {
            nextEl: '.certificates__wrapper .swiper-button-next',
            prevEl: '.certificates__wrapper .swiper-button-prev',
        },
        speed: 1500,
        // loop: true,
        grabCursor: true,
        freeMode: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
    })
}

let threeSwiper;
if (document.querySelector('.swiper-container--three-el .swiper-container')) {
    threeSwiper = new Swiper('.swiper-container--three-el .swiper-container', {
        navigation: {
            nextEl: '.swiper-container--three-el .swiper-button-next',
            prevEl: '.swiper-container--three-el .swiper-button-prev',
        },
        speed: 1500,
        grabCursor: true,
        slidesPerView: '1',
        spaceBetween: 20,
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
        },

    })
}




window.addEventListener('resize', function() {
    updateSlider(swiperCentered)
    updateSlider(swiperBanner)
    updateSlider(smallSlider)
    updateSlider(innerSlider)
    updateSlider(videoSlider)
    updateSlider(certificatesSwiper)
})