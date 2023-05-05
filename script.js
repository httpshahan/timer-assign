// Get input elements
const hoursInput = document.getElementById('hours-input');
const minutesInput = document.getElementById('minutes-input');
const secondsInput = document.getElementById('seconds-input');

// Get timer elements
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Get button elements
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

// Get sound element
const alarmSound = document.getElementById('alarm');

// Set initial values
let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval;

// Update timer function
function updateTimer() {
  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);
    alarmSound.play();
    alert('Time is up!');
  } else {
    if (seconds === 0) {
      if (minutes === 0) {
        hours--;
        minutes = 59;
      } else {
        minutes--;
      }
      seconds = 59;
    } else {
      seconds--;
    }
    hoursElement.textContent = hours < 10 ? '0' + hours : hours;
    minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
}

// Start button click event listener
startButton.addEventListener('click', function() {
  // Disable input elements
  hoursInput.disabled = true;
  minutesInput.disabled = true;
  secondsInput.disabled = true;

  // Disable start button and enable stop button
  startButton.disabled = true;

  // Set timer values
  hours = parseInt(hoursInput.value);
  minutes = parseInt(minutesInput.value);
  seconds = parseInt(secondsInput.value);

  // Start timer interval
  timerInterval = setInterval(updateTimer, 1000);
});


// Reset button click event listener
resetButton.addEventListener('click', function() {
  // Reset input values
  hoursInput.value = 0;
  minutesInput.value = 0;
  secondsInput.value = 0;

  // Reset timer values
  hours = 0;
  minutes = 0;
  seconds = 0;

  // Update timer display
  hoursElement.textContent = '00';
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';

  // Enable input elements
  hoursInput.disabled = false;
  minutesInput.disabled = false;
  secondsInput.disabled = false;

  // Enable start button
  startButton.disabled = false;

  // Clear timer interval
  clearInterval(timerInterval);
});
