export const videoPlayerInit = () => {
    const videoPlayer = document.querySelector(".video-player"),
        videoButtonPlay = document.querySelector(".video-button__play"),
        videoButtonStop = document.querySelector(".video-button__stop"),
        videoTimePassed = document.querySelector(".video-time__passed"),
        videoProgress = document.querySelector(".video-progress"),
        videoTimeTotal = document.querySelector(".video-time__total");

    const toggleIcon = () => {
        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove("fa-pause");
            videoButtonPlay.classList.add("fa-play");
        } else {
            videoButtonPlay.classList.add("fa-pause");
            videoButtonPlay.classList.remove("fa-play");
        }
    };

    const togglePlay = () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
        toggleIcon();
    }

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    };

    const addZero = n => n < 10 ?

        videoPlayer.addEventListener("click", togglePlay);
    videoButtonPlay.addEventListener('click', togglePlay);

    videoPlayer.addEventListener('play', toggleIcon);
    videoPlayer.addEventListener('pause', toggleIcon);

    videoButtonStop.addEventListener('click', stopPlay)

    videoPlayer.addEventListener('timeupdate', () => {
        const cuurentTime = videoPlayer.currentTime;
        const durationTime = videoPlayer.duration;

        let minutePassed = Math.floor(cuurentTime / 60);
        let secondsPassed = Math.floor(cuurentTime % 60);

        let minuteTotal = Math.floor(durationTime / 60);
        let secondsTotal = Math.floor(durationTime % 60);

        videoTimePassed.textContent = minutePassed + ':' + secondsPassed;
        videoTimeTotal.textContent = minuteTotal + ':' + secondsTotal;
    });
};