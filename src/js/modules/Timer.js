export default class Timer {
  constructor(deadline, days, hours, minutes, seconds) {
    this.deadline = new Date(deadline);
    this.days = document.querySelector(days);
    this.hours = document.querySelector(hours);
    this.minutes = document.querySelector(minutes);
    this.seconds = document.querySelector(seconds);
  }

  addTimer() {
    this.timeInterval = setInterval(() => this.updateTimer(), 1000);
  }

  calculateTime() {
    let timeDifference = +this.deadline - +Date.now(),
        days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours = Math.floor(timeDifference / (1000 * 60 * 60) % 24),
        minutes = Math.floor(timeDifference / (1000 * 60) % 60),
        seconds = Math.floor((timeDifference / 1000) % 60);
    return {
      'total': timeDifference,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    }
  }

  updateTimer() {
    const time = this.calculateTime();
    this.days.innerHTML = this.getZero(time.days);
    this.hours.innerHTML = this.getZero(time.hours);
    this.minutes.innerHTML = this.getZero(time.minutes);
    this.seconds.innerHTML = this.getZero(time.seconds);
    this.clearTotalTime(time.total);
  }

  getZero(number) {
    if (number >= 0 && number < 10) {
        return `0${number}`;
    } else {
        return number;
    }
  }

  clearTotalTime(totalTime) {
    if (totalTime <= 0) {
      clearInterval(this.timeInterval);
    }
  }

}