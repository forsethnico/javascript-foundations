class Ogre {
  constructor(ogreDetails) {
    this.name = ogreDetails.name;
    this.home = ogreDetails.abode || 'Swamp';
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter++
    if (human.noticesOgre() === true) {
      this.swingAt()
    }
    if (this.swings % 2 === 0) {
      human.knockedOut = true;
    }
  }
  swingAt() {
    this.swings++
  }
  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
