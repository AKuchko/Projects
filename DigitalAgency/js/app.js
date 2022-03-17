// const { default: Swiper } = require("swiper");

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-burger').addEventListener('click', openMenu); // Добавление евента на "бургер"

    const advertiseItems = document.getElementsByClassName('advertising__btn'); // Массив элементов (button) с классом advertising__btn
    for(item of advertiseItems) item.addEventListener('click', deployment); // Проходим циклом по массиву и добавляем каждому элементу евент 

    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    for (input of phoneInputs) {
        input.addEventListener('input', onPhoneInput);
        input.addEventListener('keydown', onPhoneKeyDown);
        input.addEventListener('onpaste', onPhonePasted);
    };

    const offerSlider = new Swiper('.slider', {
        loop: false,
        speed: 1000,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

let openMenu = () => { // открывание меню
    document.querySelector('body').classList.toggle('menu-is-active')
}

let deployment = (e) => { // развертывание текста в секции advertising
    const content =  e.target.previousElementSibling;
    content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + 'px';
    e.target.innerText === "Развернуть" ? e.target.innerText = "Свернуть" : e.target.innerText = "Развернуть";
}

let getInputNumbersValue = (input) => { // Получение телефонного номера без лишних символов
    return input.value.replace(/\D/g, '');
}

let onPhoneInput = (e) => { // выполняется при вводе в input[type="tel"] (форматирование введенного текста)
    let input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        formattedInputValue = '',
        selectionStart = input.selectionStart;

    if(!inputNumbersValue){
        return input.value = '';
    }

    if (input.value.length != selectionStart) {
        if (e.data && /\D/g.test(e.data)) input.value = inputNumbersValue;
        return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
        // Russian phone number
        if (inputNumbersValue[0] == '9') input.value = '7' + inputNumbersValue;
        let firstSymbols = (inputNumbersValue[0] == '8') ? ' 8' : '+7';
        formattedInputValue = firstSymbols + ' ';
        if (inputNumbersValue.length > 1) {
            formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
            formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
            formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }
    } else {
        // Not Russian phone number 
        formattedInputValue = '+' + inputNumbersValue;
    }
    input.value = formattedInputValue;
}

let onPhoneKeyDown = (e) => { // Функция для удаления последнего символа в input[type="tel"]
    let input = e.target;
    if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) input.value = '';
}

let onPhonePasted = (e) => { // Функция, не позволяющая вставить нечисловой символ в середину строки (input[tel])
    let input = e.target, 
        pasted = e.clipboardData || window.clipboardData,
        inputNumbersValue = getInputNumbersValue(input);

    if (pasted) {
        let pastedText = pasted.getData('Text');
        if (/\D/g.test(pastedText)) input.value = inputNumbersValue;
    }
}