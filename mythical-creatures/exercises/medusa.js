var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var victimStatue = new Statue(victim.name)
      if (this.statues.length < 3) {
        this.statues.push(victimStatue);
      } else if (this.statues.length === 3) {
        var alivePerson = this.statues.shift();
        this.statues.push(victimStatue);
        var revivedPerson = new Person(alivePerson.name)
        revivedPerson.mood = "relieved";
        return revivedPerson;
      }
  }
}

module.exports = Medusa;
