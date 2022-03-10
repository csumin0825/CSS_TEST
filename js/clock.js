const clock = document.getElementById("clock");
const date_ = document.getElementById("date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${min}:${sec}`;
}

function getDate() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dayt = String(date.getDate()).padStart(2, "0");
  const day = String(date.getDay());
  date_.innerText = `${year}.${month}.${dayt}`;
}

getClock();
getDate();
setInterval(getDate, 1000);
setInterval(getClock, 1000);
