class Personl {
    name: string;
    isCool: boolean;
    pets: number;

    constructor(n: string, c: boolean, p: number) {
        this.name = n;
        this.isCool = c;
        this.pets = p;
    }

    sayHello() {
        return `Hi, my name is ${this.name} and I have ${this.pets} pets.`;
    }
}

const person1 = new Personl("danny", false, 1);
const person2 = new Personl("Ram", true, 5);

console.log(person1.sayHello());
console.log(person2.sayHello());
//output:
//Hi, my name is danny and I have 1 pets.
//Hi, my name is Ram and I have 5 pets.