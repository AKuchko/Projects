window.addEventListener('load', init);

function init() {
    document.querySelector('.menu-burger').addEventListener('click', openMenu);
}

function openMenu() {
    document.querySelector('body').classList.toggle('menu-is-active')
 }

