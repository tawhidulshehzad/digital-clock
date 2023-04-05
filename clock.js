function updateTime() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours}:${minutes}:${seconds}`;
  clock.textContent = timeString;
}

// Call the updateTime() function once to initialize the clock
updateTime();

// Call the updateTime() function every second to update the clock
setInterval(updateTime, 1000);

