import * as formMethods from './modules/form-logic.js';

window.addEventListener('DOMContentLoaded', init);

function init() {
    let requiredField = document.querySelectorAll('input[required]');
    for (let input of requiredField) {
        input.addEventListener('input', formMethods.validateRequiredField);
    }

    let numberInputs = document.querySelectorAll('input[type="number"]');
    for (let input of numberInputs) {
        input.addEventListener('input', formMethods.onNumberInput);
    }

    let phoneInputs = document.querySelectorAll('input[type="tel"]');
    for (let input of phoneInputs) {
        input.addEventListener('input', formMethods.onPhoneInput);
        input.addEventListener('keydown', formMethods.onPhoneKeyDown);
    }
}