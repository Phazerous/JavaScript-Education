const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const getTimeClock = date => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds()
});

const appendAMPM = timeClock => ({
  ...timeClock,
  ampm: (timeClock.hours >= 12) ? "PM" : "AM"
});

const civilianHours = timeClock => ({
  ...timeClock,
  hours: (timeClock.hours >= 12) ? timeClock.hours - 12 : timeClock.hours
});

const getCivilianTime = timeClock => compose(
  appendAMPM,
  civilianHours
)(timeClock);

const prependZero = key => timeClock => ({
  ...timeClock,
  [key]: (timeClock[key] < 10) ? "0" + timeClock[key] : timeClock[key]
});

const doubleDigits = timeClock => compose(
  prependZero("hours"),
  prependZero("minutes"),
  prependZero("seconds")
)(timeClock);

const formatClock = format => time => format
  .replace("hh", time.hours)
  .replace("mm", time.minutes)
  .replace("ss", time.seconds)
  .replace("tt", time.ampm)

const compose = (...fns) => arg => fns.reduce((composed, fn) => fn(composed), arg);

const display = func => arg => func(arg);

const startTicking = () => setInterval(
  compose(
    clear,
    getCurrentTime,
    getTimeClock,
    getCivilianTime,
    doubleDigits,
    formatClock("hh:mm:ss tt"),
    display(log)
  ), oneSecond()
);

startTicking();