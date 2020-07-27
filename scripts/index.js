'use strict'
import {
    radioPlayerInit
}
from './radioPlayer.js';
import {
    musicPlayerInit
}
from './musicPlayer.js';
import {
    videoPlayerInit
}
from './videoPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn'),
    playerBlock = document.querySelectorAll('.player-block');




playerBtn.forEach((elem, i) => {
    elem.addEventListener('click', () => {
        deactivationPlayer();
        elem.classList.add('active');
        playerBlock[i].classList.add('active');
    });
});

radioPlayerInit();
videoPlayerInit();
musicPlayerInit();