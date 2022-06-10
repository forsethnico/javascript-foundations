class VendingMachine {
  constructor(vendingDetails) {
    this.id = vendingDetails.id
    this.isBroken = vendingDetails.isBroken
    this.snacks = []
  }
  addSnacks(snack) {
    this.snacks.push(snack)
  }
}

module.exports = VendingMachine;
