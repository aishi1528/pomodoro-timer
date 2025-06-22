// script.js
let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let timeInput = document.getElementById('timeInput');

let pomodoroDuration = parseInt(timeInput.value) * 60; // in seconds
let timeLeft = pomodoroDuration;
let timerInterval = null;

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = 
    `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

function startTimer() {
  // Disable changing time while timer is running
  timeInput.disabled = true;

  if (timerInterval) return; // Already running
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up! Take a break 😊");
      pauseBtn.disabled = true;
      startBtn.disabled = false;
      timeInput.disabled = false;
    }
  }, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  timeInput.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  pomodoroDuration = parseInt(timeInput.value) * 60;
  if (isNaN(pomodoroDuration) || pomodoroDuration <= 0) {
    pomodoroDuration = 25 * 60; // fallback to 25 minutes
    timeInput.value = 25;
  }
  timeLeft = pomodoroDuration;
  updateDisplay();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  timeInput.disabled = false;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Update timer display initially based on default input value
resetTimer();
