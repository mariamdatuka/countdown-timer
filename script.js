const countdown = () => {
  //Launching day in milliseconds
  const targetDate = new Date("June 1, 2023 12:00:00").getTime();
  //current date in milliseconds
  const currentDate = new Date().getTime();
  //how many days left in milliseconds
  let gap = targetDate - currentDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //calculating days
  const displayDay = Math.floor(gap / day);
  const displayHour = Math.floor((gap % day) / hour);
  const displayMinute = Math.floor((gap % hour) / minute);
  const displaySecond = Math.floor((gap % minute) / second);

  //update html
  document.querySelector(".day").innerText = displayDay;
  document.querySelector(".hour").innerText = displayHour;
  document.querySelector(".minute").innerText = displayMinute;
  document.querySelector(".second").innerText = displaySecond;
};

setInterval(countdown, 1000);
