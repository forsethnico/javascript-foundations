class Snowman {
  constructor(snowManDetails) {
    this.carrots = snowManDetails.carrots
    this.coal = snowManDetails.coal
    this.buttons = snowManDetails.buttons
    this.snowballs = snowManDetails.snowballs
    this.magicHat = false
  }
  canWearMagicHat() {
    if (this.coal >= 2 && this.buttons >= 5 && this.carrots >= 1 && this.snowballs >= 2) {
      this.magicHat = true;
    }
  }
}

module.exports = Snowman;
