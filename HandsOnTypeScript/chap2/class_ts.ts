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


//the above conde can be cosnized as:
//let above class personl as human
class human {
    constructor(
        readonly name: string,// Public but readonly (cannot be changed after initialization).
        private isCool: boolean,   // Private (only accessible within the class).
        protected email: string,   // Protected (accessible within the class and subclasses).
        public pets: number         // Public (accessible anywhere).
    ){}
    sayMyName() {
        console.log(`Your not Heisenberg, you're ${this.name}`);
      }
}
const person3 = new human('Danny', false, 'dane.com', 1);
console.log(person3.name);
console.log(person3.sayMyName());