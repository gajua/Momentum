
const nowDay = document.querySelector(".nowDay")
const nowtime = document.querySelector(".nowTime")

function getClock() {
  const date = new Date();
  const day = date.toLocaleDateString();
  const time = date.toLocaleTimeString();
  nowDay.innerText = `${day}`;
  nowtime.innerText = `${time}`;
}

getClock();
setInterval(getClock, 1000);
