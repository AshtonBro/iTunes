export const videoPlayerInit = () => {
    const videoPlayer = document.querySelector(".video-player"),
        videoButtonPlay = document.querySelector(".video-button__play"),
        videoButtonStop = document.querySelector(".video-button__stop"),
        videoTimePassed = document.querySelector(".video-time__passed"),
        videoProgress = document.querySelector(".video-progress"),
        videoTimeTotal = document.querySelector(".video-time__total"),
        videoFullscreen = document.querySelector(".video-fullscreen"),
        videoVolume = document.querySelector('.video-volume');

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
    };

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    };

    const addZero = (n) => (n < 10 ? "0" + n : n);

    videoPlayer.addEventListener("click", togglePlay);
    videoButtonPlay.addEventListener("click", togglePlay);
    videoPlayer.addEventListener("play", toggleIcon);
    videoPlayer.addEventListener("pause", toggleIcon);
    videoButtonStop.addEventListener("click", stopPlay);
    videoPlayer.addEventListener("timeupdate", () => {
        const currentTime = videoPlayer.currentTime;
        const durationTime = videoPlayer.duration;
        videoProgress.value = (currentTime / durationTime) * 100;
        let minutePassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60);
        let minuteTotal = Math.floor(durationTime / 60);
        let secondsTotal = Math.floor(durationTime % 60);
        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(
      secondsPassed
    )}`;
        videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(
      secondsTotal
    )}`;
    });

    videoProgress.addEventListener("change", () => {
        const durationTime = videoPlayer.duration;
        const value = videoProgress.value;
        videoPlayer.currentTime = (value * durationTime) / 100;
    });

    videoFullscreen.addEventListener("click", () => {
        videoPlayer.webkitEnterFullScreen();
    });

    videoVolume.addEventListener('input', () => {
        videoPlayer.volume = videoVolume.value / 100;
    })

    videoPlayer.volume = 0.5;
};