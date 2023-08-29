// http://websamuraj.pl/examples/js/projekt11/

const mainBtn = document.querySelector('button.main');
const resetBtn = document.querySelector('button.reset');
const timeDiv = document.querySelector('.time div')
let isPaused = false;
let time = 0;
let idInterval
const startTime = new Date().getTime();

const timer = function() {
  if (!isPaused) {
    isPaused = !isPaused
    mainBtn.innerHTML = "Pauza";
    idInterval = setInterval(start, 50);
  } else {
    isPaused = !isPaused;
    mainBtn.innerHTML = "Start";
    clearInterval(idInterval);
  }
}

const start = () => {
  time++
  timeDiv.innerHTML = (time / 100).toFixed(2);
}

const reset = () => {
  time = 0;
  mainBtn.innerHTML = "Start";
  clearInterval(idInterval);
  isPaused = false;
  timeDiv.innerHTML = "---";
}

mainBtn.addEventListener('click', timer);

resetBtn.addEventListener('click', reset)
