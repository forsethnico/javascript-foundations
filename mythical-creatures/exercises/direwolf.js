class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || "Beyond the Wall"
    this.size = size || "Massive"
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(stark) {
    if (this.home === stark.location) {
      if (this.starksToProtect.length < 2) {
        this.starksToProtect.push(stark);
        stark.safe = true;
        this.huntsWhiteWalkers = false;
      }
    }
  }
  leave(stark) {
    this.starksToProtect.pop()
    stark.safe = false;
  }
}


module.exports = Direwolf;
