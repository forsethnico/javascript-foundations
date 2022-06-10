class Snack {
  constructor(name, pricePerUnit) {
    this.name = name
    this.price = pricePerUnit
    this.itemsInStock = 0
  }
  stockItems(stockAmt) {
    this.itemsInStock += stockAmt
  }
  removeItem() {
    if (this.itemsInStock > 0) {
      this.itemsInStock--
      return `Item taken! There are now ${this.itemsInStock} items left.`
    } else if (this.itemsInStock === 0) {
      return `Sorry, no ${this.name} left in stock!`
    }
  }
}  

module.exports = Snack;
