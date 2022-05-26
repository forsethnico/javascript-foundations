class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = 'human';
    this.hungry = false
  }
  completeTransformation() {
    if (this.form === "wolf") {
      this.form = "human"
      this.hungry = false;
      return "Where are I?"
    } else if (this.form === "human") {
      this.form = "wolf"
      this.hungry = true;
      return "Aaa-Woooo!"
    }
  }
  eatVictim(victim) {
    if (this.hungry == true && this.form != "human") {
      victim.alive = false;
      this.form = "human"
      return `Yum, ${victim.name} was delicious.`
    } else {
      return `No way am I eating ${victim.name}, I'd like a burger!`
    }
  }
}










module.exports = Werewolf;
