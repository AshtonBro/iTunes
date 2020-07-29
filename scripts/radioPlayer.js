export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio'),
        radioCoverImg = document.querySelector('.radio-cover__img'),
        radioHeader = document.querySelector('.radio-header'),
        radioNavigation = document.querySelector('.radio-navigation'),
        radioItem = document.querySelectorAll('.radio-item'),
        radioStop = document.querySelector('.radio-stop');

    const audio = new Audio();
    audio.type = 'audio/acc';
    radioStop.disabled = true;

    const changeIconPlay = () => {
        if (audio.paused) {
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else {
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
        }
    };

    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;

        audio.play();
        changeIconPlay();
    });

    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay();
    });
};