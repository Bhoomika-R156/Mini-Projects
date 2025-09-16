let startTime, updatedTime, difference, tInterval;
let running = false;
let laps = 1;

const display = document.getElementById("display");
const lapsList = document.getElementById("laps");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");

function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(getShowTime, 1000);
    running = true;
  }
}

function pauseTimer() {
  if (running) {
    clearInterval(tInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
}

function resetTimer() {
  clearInterval(tInterval);
  running = false;
  difference = 0;
  display.innerHTML = "00:00:00";
  lapsList.innerHTML = "";
  laps = 1;
}

function lapTime() {
  if (running) {
    const li = document.createElement("li");
    li.innerText = `Lap ${laps}: ${display.innerHTML}`;
    lapsList.appendChild(li);
    laps++;
  }
}

function getShowTime() {
  updatedTime = new Date().getTime() - startTime;
  
  let hours = Math.floor((updatedTime / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((updatedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((updatedTime / 1000) % 60);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  display.innerHTML = `${hours}:${minutes}:${seconds}`;
}

// Event Listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", lapTime);
