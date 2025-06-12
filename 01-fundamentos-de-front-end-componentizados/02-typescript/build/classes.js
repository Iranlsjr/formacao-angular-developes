"use strict";
//classes
/* Data modifiers
  public
  private
  protected
*/
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack whith ${this.stregth} points`);
    }
}
const p1 = new Character("Ryu", 10, 98);
p1.attack();
//Character: Superclass
//Magicina:  Subclasse
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p2 = new Magician("Mago", 9, 30, 100);
