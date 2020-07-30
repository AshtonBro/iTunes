export const radioPlayerInit = () => {
  const radio = document.querySelector(".radio"),
    radioCoverImg = document.querySelector(".radio-cover__img"),
    radioHeaderBig = document.querySelector(".radio-header__big"),
    radioNavigation = document.querySelector(".radio-navigation"),
    radioItem = document.querySelectorAll(".radio-item"),
    radioStop = document.querySelector(".radio-stop"),
    radioVolume = document.querySelector(".radio-volume"),
    radioMute = document.querySelector(".radio-mute");

  let prevVolume = 1;
  const audio = new Audio();
  audio.type = "audio/acc";
  radioStop.disabled = true;

  const changeIconPlay = () => {
    if (audio.paused) {
      radio.classList.remove("play");
      radioStop.classList.add("fa-play");
      radioStop.classList.remove("fa-stop");
    } else {
      radio.classList.add("play");
      radioStop.classList.add("fa-stop");
      radioStop.classList.remove("fa-play");
    }
  };

  const selectItem = (elem) => {
    radioItem.forEach((item) => item.classList.remove("select"));
    elem.classList.add("select");
  };

  radioNavigation.addEventListener("change", (event) => {
    const target = event.target;
    const parrent = target.closest(".radio-item");
    selectItem(parrent);

    const title = parrent.querySelector(".radio-name").textContent;
    radioHeaderBig.textContent = title;

    const img = parrent.querySelector(".radio-img").src;
    radioCoverImg.src = img;

    radioStop.disabled = false;
    audio.src = target.dataset.radioStantion;
    audio.play();
    changeIconPlay();
  });

  radioStop.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    changeIconPlay();
  });

  radioVolume.addEventListener("input", () => {
    audio.volume = radioVolume.value / 100;
    prevVolume = audio.volume;
  });

  radioMute.addEventListener("click", () => {
    if (audio.volume) {
      prevVolume = audio.volume;
      audio.volume = 0;
    } else {
      audio.volume = prevVolume;
    }
  });
};