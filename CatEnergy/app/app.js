window.addEventListener('DOMContentLoaded', init);

import { createMap } from './modules/map.js';
import { handleInputChange } from './modules/range-input-logic.js';
import { onBurgerClick } from './modules/burger-button.js';

function init() {
    document.querySelector('.header__burger').addEventListener('click', onBurgerClick);

    document.querySelector('.comparison__input')?.addEventListener('input', handleInputChange);
    
    ymaps.ready(createMap);
}