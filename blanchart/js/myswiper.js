const Swiper1 = new Swiper('.hero__swiper__container', {
    loop: true,
    loopedSlides: 1,
    spaceBetween: 100,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    speed: 1500,
});

const swiper2 = new Swiper('.gallery__swiper__container', {

    pagination: {
        el: '.gallery__swiper__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.gallery__swiper__button__next',
        prevEl: '.gallery__swiper__button__prev',
    },

    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    breakpoints: {
        576: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
            slidesPerColumn: 2,
        },

        1366: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
            slidesPerColumn: 2,
        },

        1500: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
            slidesPerColumn: 2,
        },

    }
});

const swiper3 = new Swiper('.edition__swiper__container', {
    pagination: {
        el: '.edition__swiper__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.edition__swiper__button__next',
        prevEl: '.edition__swiper__button__prev',
    },
    loop: true,
    loopedSlides: 1,

    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        1366: {
            slidesPerView: 2,
            spaceBetween: 50,
        },

        1500: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
});

const swiper4 = new Swiper('.project__swiper__container', {
    navigation: {
        nextEl: '.project__swiper__button__next',
        prevEl: '.project__swiper__button__prev',
    },
    loop: true,
    loopedSlides: 1,
    speed: 700,

    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    breakpoints: {
        576: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 34,
        },

        1366: {
            slidesPerView: 2,
            spaceBetween: 50,
        },

        1500: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
});

const swiper5 = new Swiper('.event__swiper__container', {
    loop: true,
    loopedSlides: 1,
    speed: 700,
    pagination: {
        el: '.event__swiper__pagination',
        type: 'bullets',
        clickable: true,
    },
});