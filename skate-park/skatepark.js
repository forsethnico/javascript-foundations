class SkatePark {
  constructor(skateParkDetails) {
    this.name = skateParkDetails.name;
    this.yearFounded = skateParkDetails.year;
    this.style = skateParkDetails.type;
    this.features = skateParkDetails.features;
    this.isPrivate = skateParkDetails.isPrivate || false;
    this.cost = skateParkDetails.price || 0;
    this.occupants = [];
  }
  admit(skater) {
    if (!this.isPrivate) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`
    } else if (skater.money >= this.cost && this.occupants.length < 3) {
      this.occupants.push(skater);
      skater.money = (skater.money - this.cost)
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } else if (skater.money < this.cost) {
      return `Sorry, you don't have enough money.`
    } else if (this.occupants.length >= 3) {
      return `Sorry, we are at max capacity. Thank you for understanding.`
    }
  }
}

module.exports = SkatePark;
