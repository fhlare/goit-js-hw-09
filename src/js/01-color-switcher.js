const refs = {
  buttonStart: document.querySelector('[data-start]'),
  buttonStop: document.querySelector('[data-stop]'),
};

refs.buttonStart.addEventListener('click', onSwitchColorClick);
refs.buttonStop.addEventListener('click', onStopSwitchColorClick);

let intervalId = null;

function switchDisabled(boule) {
  refs.buttonStart.disabled = boule;
  refs.buttonStop.disabled = !boule;
}

function onSwitchColorClick() {
  switchDisabled(true);

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopSwitchColorClick() {
  switchDisabled(false);

  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}