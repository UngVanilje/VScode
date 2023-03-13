let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let count = 0;
let timerIntervalId = null;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

async function startTimer() {
  if (!timerIntervalId) {
    timerIntervalId = setInterval(async () => {
      await stopWatch();
    }, 10);
  }
}

function stopTimer() {
  clearInterval(timerIntervalId);
  timerIntervalId = null;
}

function resetTimer() {
  clearInterval(timerIntervalId);
  timerIntervalId = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  count = 0;
  updateDisplay();
}

async function stopWatch() {
  if (timerIntervalId) {
    count++;
  }
  if (count == 100) {
    count = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function updateDisplay() {
  let hrString = hours.toString().padStart(2, "0");
  let minString = minutes.toString().padStart(2, "0");
  let secString = seconds.toString().padStart(2, "0");
  let countString = count.toString().padStart(2, "0");

  document.getElementById("hr").innerHTML = hrString;
  document.getElementById("min").innerHTML = minString;
  document.getElementById("sec").innerHTML = secString;
  document.getElementById("count").innerHTML = countString;
}




















// const showtime = document.getElementById("time");
// setInterval(showTime, 1000);
// //Show time function
// function showTime() {
//     let time = new Date();
//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();
//     let day = time.getDay();
//     let month = time.getMonth();
//     let year = time.getFullYear();
//     let date = time.getDate();
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//     //Show time
//     document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`;
// }
// showTime();