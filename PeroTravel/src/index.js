import './index.html';
import './index.scss';

import { openMenu } from './modules/menu-button';

document.querySelector('#menu-button').addEventListener('click', openMenu);