"use strict";
const bot = {
    id: 1,
    name: "Memaman",
};
console.log(bot);
const bot2 = {
    id: 1,
    name: "Memaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot2);
//Classes
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello im ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
