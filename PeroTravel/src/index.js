import './index.html';
import './index.scss';

import './modules/swiper-config';
import { throttle } from './modules/throttle';
import { openMenu } from './modules/header-logic';
import { hideHeader } from './modules/header-logic';

window.addEventListener('scroll', () => throttle(hideHeader));
document.querySelector('#menu-button').addEventListener('click', openMenu);
