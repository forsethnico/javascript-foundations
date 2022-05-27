var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = "up"
  }

  admitSkier(name, hasLiftTicket) {
    var skier = new Skier(name, hasLiftTicket);
    if (skier.hasLiftTicket == true) {
      if (this.skiers.length < this.limit) {
        this.skiers.push(skier)
      } else {
        return `Sorry, ${skier.name}. Please wait for the next lift!`;
      }
    } else {
      return `Sorry, ${skier.name}. You need a lift ticket!`
    }
  }
  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = 'down'
    } else if (this.skiers.length < this.limit) {
        var remainingSeats = (this.limit - this.skiers.length);
      if (remainingSeats > 1) {
        return `We still need ${remainingSeats} more skiers!`
      } else {
        return `We still need ${remainingSeats} more skier!`
      }
    }
  }
}

module.exports = Lift;
