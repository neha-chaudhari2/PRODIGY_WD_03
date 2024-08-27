let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("lapBtn").addEventListener("click", recordLap);

function startTimer() {
  if (!isRunning) {
    timer = setInterval(updateTime, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  display.innerHTML = formatTime(0);
  laps.innerHTML = "";
}

function updateTime() {
  elapsedTime++;
  display.innerHTML = formatTime(elapsedTime);
}

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function recordLap() {
  const lapTime = formatTime(elapsedTime);
  const lapElement = document.createElement("div");
  lapElement.textContent = `Lap: ${lapTime}`;
  laps.appendChild(lapElement);
}
