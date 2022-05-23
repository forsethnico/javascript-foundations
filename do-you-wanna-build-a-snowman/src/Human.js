var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
    gatherMaterials(material, number) {
      this.materials[material] = this.materials[material] + number;
    }

    buildASnowman() {
//create new instance of Snowman class
      var snowman = new Snowman(this.materials)
      return snowman;
    }
  }
}

module.exports = Human;
