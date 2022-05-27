class Centaur {
  constructor(centaurDetails) {
    this.breed = centaurDetails.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.crankyCount = 0;
  }

  shootBow() {
    this.crankyCount++
    if (this.crankyCount >= 3 || this.layingDown === true) {
      this.cranky = true;
      return `NO!`
    }
    return `Twang!!!`;
  }

  run() {
    this.crankyCount++
    if (this.crankyCount >= 3 || this.layingDown === true) {
      this.cranky = true;
      return `NO!`
    } else {
    return `Clop clop clop clop!!!`
    }
  }

  sleep() {
    if (this.layingDown === true) {
      this.cranky = false;
      this.crankyCount = 0;
      return 'ZZZZ'
    }
    return 'NO!'
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing === true) {
      this.cranky = false;
    }
    return `Not while I'm laying down!`
  }
}





module.exports = Centaur;
