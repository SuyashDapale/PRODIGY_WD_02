let startTime, elapsedTime = 0, timerInterval;
const lapsContainer = document.getElementById('laps');

function updateDisplay() {
  const time = new Date(elapsedTime);
  const minutes = time.getUTCMinutes();
  const seconds = time.getUTCSeconds();
  const milliseconds = Math.floor(time.getUTCMilliseconds() / 10);
  document.getElementById('display').innerText = 
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
}

function pause() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
  lapsContainer.innerHTML = ''; // Clear laps when reset
}

function recordLap() {
  const lapTime = new Date(elapsedTime);
  const minutes = lapTime.getUTCMinutes();
  const seconds = lapTime.getUTCSeconds();
  const milliseconds = Math.floor(lapTime.getUTCMilliseconds() / 10);
  const lapItem = document.createElement('li');
  lapItem.textContent = 
    `Lap: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  lapsContainer.appendChild(lapItem);
}

document.getElementById('startButton').addEventListener('click', start);
document.getElementById('pauseButton').addEventListener('click', pause);
document.getElementById('resetButton').addEventListener('click', reset);
document.getElementById('lapButton').addEventListener('click', recordLap);
