import './index.css';

import Timer from './modules/timer';

const timer = new Timer(new Date('2024-01-01 00:00:00'), document.querySelector('#timer'));

document.querySelector('#stop').addEventListener('click', () => {
    timer.stop();
});

document.querySelector('#start').addEventListener('click', () => {
    timer.start();
});