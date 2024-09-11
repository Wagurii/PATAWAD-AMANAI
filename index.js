//getHours getMinutes getSeconds toString padStart
//updateClock
//setInterval
//timeNow = ${hours}
//element textContent = time
const clock = document.getElementById("clock");

function updateClock(){
     const now = new Date;

     const hours = now.getHours().toString().padStart(2, '0');
     const minutes = now.getMinutes().toString().padStart(2, '0');
     const seconds = now.getSeconds().toString().padStart(2, '0');
     
     const timeNow = `${hours} : ${minutes} : ${seconds}`;

     clock.textContent = timeNow;
}
setInterval(updateClock,1000);
updateClock();