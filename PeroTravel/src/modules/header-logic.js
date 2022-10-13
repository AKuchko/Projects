let w = window;
let doc = document.documentElement;
let header = document.querySelector('.header');

let prevScroll = w.scrollY || doc.scrollTop;
let curScroll;
let direction = 0;
let prevDirection = 0;

export const openMenu = () => {
    document.querySelector('body').classList.toggle('menu-active');
}

export const hideHeader = () => {
    if (w.innerWidth >= 1440) return

    curScroll =  w.scrollY || doc.scrollTop;
    
    if (curScroll > prevScroll) direction = 1;
    else if (curScroll < prevScroll) direction = -1;

    if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
    }

    toggleHeaderBackground(curScroll);

    prevScroll = curScroll;
}

const toggleHeader = (dir, curScroll) => {
    if (direction === 1 && curScroll > 113) {
        header.classList.add('hide');
        prevDirection = dir;
    }
    else if (direction === -1) {
        header.classList.remove('hide');
        prevDirection = dir;
    }
}

const toggleHeaderBackground = (currentScroll) => {
    if (currentScroll > 120) header.classList.add('header--background');
    else header.classList.remove('header--background');
}