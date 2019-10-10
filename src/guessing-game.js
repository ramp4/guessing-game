class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return (this.cur = Math.ceil(this.min + (this.max - this.min) / 2));
  }

  lower() {
    this.max = this.cur;
  }

  greater() {
    this.min = this.cur;
  }
}

module.exports = GuessingGame;
