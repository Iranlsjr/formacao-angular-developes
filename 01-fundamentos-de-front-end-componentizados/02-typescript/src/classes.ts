//classes

/* Data modifiers
  public
  private
  protected
*/
class Character {
  protected name?: string;
  readonly stregth: number;
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack whith ${this.stregth} points`);
  }
}
const p1 = new Character("Ryu", 10, 98);
p1.attack();

//Character: Superclass
//Magicina:  Subclasse
class Magician extends Character {
  magicPoints: number;
  constructor(
    name: string,
    stregth: number,
    skill: number,
    magicPoints: number
  ) {
    super(name, stregth, skill);
    this.magicPoints = magicPoints;
  }
}
const p2 = new Magician("Mago", 9, 30,100)