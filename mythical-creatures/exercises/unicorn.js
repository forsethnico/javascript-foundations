class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }
  isWhite() {
    return false;
  }
  says(phrase) {
    return `**;* ${phrase} *;**`
  }
}

module.exports = Unicorn;
