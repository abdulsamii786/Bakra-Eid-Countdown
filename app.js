let id = setInterval(eidCountdown, 1000);

function eidCountdown() {
  let currentDate = new Date().getTime();
  let eidDate = new Date("Jun 17 2024").getTime();

  let difference = eidDate - currentDate;

  let getSec = difference / 1000;

  let getMin = difference / (1000 * 60);

  let getHours = difference / (1000 * 60 * 60);

  let getDays = difference / (1000 * 60 * 60 * 24);

  let getMain = document.getElementById("main");
  let getTitle = document.getElementById("title");

  if (difference == 0) {
    clearInterval(id);
    getMain.innerHTML = `<div class="box"><h1>Eid Mubarak</h1></div>`;
    getMain.style.fontSize = "40px";
    getMain.style.textAlign = "center";
  } else {
    getTitle.innerHTML = `<h1>Eid Ul Adha Countdown</h1>`;
    getMain.innerHTML = `
    <div class="box"><h2>Days</h2><h2>${Math.floor(getDays)}</h2></div>
    <div class="box"><h2>Hours</h2><h2>${Math.floor(getHours % 24)}</h2></div>
    <div class="box"><h2>Minutes</h2><h2>${Math.floor(getMin % 60)}</h2></div>
    <div class="box"><h2>Seconds</h2><h2>${Math.floor(getSec % 60)}</h2></div>
    `;
  }
}
