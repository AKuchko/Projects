const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, '');
}

const checkNumber = (number) => {
    return +number > 50 ? number.substring(0, number.length - 1) : number;
}

const validateRequiredField = (event) => {
    let input = event.target
    let value = input.value;

    if (input.type === 'email') 
        validateEmailField(input);

    if (!value)
        input.classList.add('field__input--incorrect');
    else 
        input.classList.remove('field__input--incorrect');
}

const validateEmailField = (input) => {
    if (EMAIL_REGEXP.test(input.value)) 
        input.classList.add('field__input--correct');
    else 
        input.classList.remove('field__input--correct');
}

const onNumberInput  = (event) => {
    let input = event.target;
    let numbersValue = getInputNumbersValue(input);

    numbersValue = checkNumber(numbersValue);
    
    input.value = numbersValue;
}

const onPhoneInput = (e) => {
    let input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let formattedInputValue = '';
    let selectionStart = input.selectionStart;
    let currentSelectionStart;

    if (!inputNumbersValue) return input.value = '';

    if (input.value.length != selectionStart) {
        if (e.data && /\D/g.test(e.data)) input.value = inputNumbersValue;
        currentSelectionStart = selectionStart;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] === '9') inputNumbersValue = '7' + inputNumbersValue;
        let firstSymbol = inputNumbersValue[0] === '8' ? '8' : '+7';
        formattedInputValue = firstSymbol + ' ';

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
    }
    else {
        formattedInputValue = '+' + inputNumbersValue;
    }

    input.value = formattedInputValue;
    if (currentSelectionStart) input.setSelectionRange(currentSelectionStart, currentSelectionStart) 

    if (inputNumbersValue.length === 11) input.classList.add('field__input--correct')
}

const onPhoneKeyDown = (e) => {
    let input = e.target;
    if (e.keyCode === 8 && getInputNumbersValue(input).length === 1) input.value = '';

    validateRequiredField(e)
}

export { onNumberInput, onPhoneInput, onPhoneKeyDown, validateRequiredField };