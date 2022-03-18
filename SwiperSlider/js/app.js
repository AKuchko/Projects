// const { default: Swiper, Parallax } = require("swiper");

// const { default: gsap } = require("gsap/all");

document.addEventListener('DOMContentLoaded', init);

function init() {

    const swiperIMG = new Swiper('.swiper-img', {
        loop: false,
        speed: 2400,
        parallax: true,
        pagination: {
            el: '.slider-counter .total',
            type: 'custom',
            renderCustom: returnSlideCount,
        }
    })

    const swiperTXT = new Swiper('.swiper-txt', {
        loop: false,
        speed: 2400,
        mousewheel: {
            invert: true,
          },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    })

    // Привязка двух слайдеров 
    swiperIMG.controller.control = swiperTXT
    swiperTXT.controller.control = swiperIMG

    // прокрутка декоративной шестерни 
    let gear = document.querySelector('.slider-gear')

    swiperTXT.on('slideNextTransitionStart', () => gsapRotate('+', gear))
    swiperTXT.on('slidePrevTransitionStart', () => gsapRotate('-', gear))

    // 
    let curNumber = document.querySelector('.slider-counter .current'),
        bottomCurNumber = document.querySelector('.slider-current__num');

    swiperTXT.on('slideChange', () => updateCurrentSlideNumber(swiperTXT, curNumber, bottomCurNumber));
}

const gsapRotate = (sign, el) => {
    gsap.to(el, 3, {
        rotation: `${sign}=40`,
        ease: Power2.easeOut
    })
}

const returnSlideCount = (swiper, current, total) => {
    return `0${total}`;
}

const updateCurrentSlideNumber = (slider, firstEl, secondEl) => {
    let index = slider.realIndex + 1;
    gsap.to(firstEl, .2, {
        force3D: true,
        y: -10,
        opacity: 0,
        ease: Power2.easeOut,
        onComplete: () => {
            gsap.to(firstEl, .1, {
                force3D: true,
                y: 10,
            })
            firstEl.innerHTML = `0${index}`;
            secondEl.innerHTML = `0${index}`;
        }
    })
    gsap.to(firstEl, .2, {
        force3D: true,
        y: 0,
        opacity: 1,
        ease: Power2.easeOut,
        delay: .3,
    })
}