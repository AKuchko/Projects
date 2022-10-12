import Swiper from "swiper";
import 'swiper/css';

const breakpoints = {
    768: {
        slidesOffsetBefore: 289,
        slidesOffsetAfter: 79,
    },
    1440: {
        slidesOffsetBefore: 825,
        slidesOffsetAfter: 160,
    }
}

const header_section_slider = new Swiper(
    '.header-section__slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesOffsetBefore: 24,
        slidesOffsetAfter: 24,
        breakpoints: breakpoints,
    }
)
