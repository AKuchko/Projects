window.addEventListener('load', init);

const openMenu = () => { // открывание меню
    document.querySelector('body').classList.toggle('menu-is-active')
}

const deployment = (e) => { // развертывание текста в секции advertising
    const content =  e.target.previousElementSibling;
    content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + 'px';
    e.target.innerText === "Развернуть" ? e.target.innerText = "Свернуть" : e.target.innerText = "Развернуть";
}

function init() {
    document.querySelector('.menu-burger').addEventListener('click', openMenu); // Добавление евента на "бургер"

    const advertiseItems = document.getElementsByClassName('advertising__btn'); // Массив элементов (button) с классом advertising__btn
    for(item of advertiseItems) item.addEventListener('click', deployment); // Проходим циклом по массиву и добавляем каждому элементу евент 
}

