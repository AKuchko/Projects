import Swiper, { Navigation, Scrollbar } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

Swiper.use(Navigation);
Swiper.use(Scrollbar);

const spaceBetweenSlides = 20;
const navigationSettings = { nextEl: '.base-slider__button-next', prevEl: '.base-slider__button-prev' };
const scrollbarSettings = { el: '.base-slider__scrollbar' };

const header_section_slider = new Swiper(
    '.header-section__slider', {
        slidesPerView: 'auto',
        spaceBetween: spaceBetweenSlides,
        slidesOffsetBefore: 24,
        slidesOffsetAfter: 24,
        breakpoints: {
            768: {
                slidesOffsetBefore: 289,
                slidesOffsetAfter: 79,
            },
            1440: {
                slidesOffsetBefore: 825,
                slidesOffsetAfter: 160,
            }
        },
    }
)

const popular_excursions = new Swiper(
    '.popular-excursions__slider', 
    {
        slidesPerView: 'auto',
        spaceBetween: spaceBetweenSlides,
        slidesOffsetAfter: 24,
        navigation: navigationSettings,
        scrollbar: scrollbarSettings,
    }
)