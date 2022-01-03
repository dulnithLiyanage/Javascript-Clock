function displayTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let period = "AM";

  h = h == 0 ? 12 : h;

  if (h > 12) {
    h = h - 12;
    period = "PM";
  }

  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  console.log(`${h}:${m}:${s} ${period}`);
}

setInterval(displayTime, 1000);
