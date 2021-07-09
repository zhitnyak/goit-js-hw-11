// import '../sass/main.scss';
const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', onBtnStart);
refs.stopBtn.addEventListener('click', onBtnStop);

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

let timerId;

function onBtnStart() {
  refs.startBtn.disabled = 'disabled';

  return (timerId = setInterval(changeBodyColor, 1000));
}

function onBtnStop() {
  clearInterval(timerId);
  timerId = 0;
  refs.startBtn.disabled = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
