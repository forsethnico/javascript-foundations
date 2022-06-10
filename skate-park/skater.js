class Skater {
  constructor(skaterDetails) {
    this.name = skaterDetails.name;
    this.skill = skaterDetails.skill;
    this.tricks = skaterDetails.tricks
    this.money = skaterDetails.cash || 20
    this.frustration = 0;
  }
  practice(trick) {
    if (!this.tricks[trick]) {
      this.frustration++
    }
    if (this.frustration >= 3) {
      this.tricks[trick] = true;
      this.frustration = 0;
      return `I just learned to ${trick}!!!`
    }
  }
}

module.exports = Skater;
