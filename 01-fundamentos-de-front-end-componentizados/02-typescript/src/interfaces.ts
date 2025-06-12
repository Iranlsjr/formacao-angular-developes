// Interfaces (type x interface)
type robot = {
  readonly id: number | string;
  name: string;
};
const bot: robot = {
  id: 1,
  name: "Memaman",
};
console.log(bot);

interface robot2 {
  readonly id: number | string;
  name: string;
  sayHello(): string;
}
const bot2: robot2 = {
    id: 1,
    name: "Memaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};
console.log(bot2);
//Classes
class Pessoa implements robot2 {
  id: string | number;
  name: string;

  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `Hello im ${this.name}`;
  }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
