var Personl = /** @class */ (function () {
    function Personl(n, c, p) {
        this.name = n;
        this.isCool = c;
        this.pets = p;
    }
    Personl.prototype.sayHello = function () {
        return "Hi, my name is ".concat(this.name, " and I have ").concat(this.pets, " pets.");
    };
    return Personl;
}());
var person1 = new Personl("danny", false, 1);
var person2 = new Personl("Ram", true, 5);
console.log(person1.sayHello());
console.log(person2.sayHello());
//output:
//Hi, my name is danny and I have 1 pets.
//Hi, my name is Ram and I have 5 pets.
//the above conde can be cosnized as:
//let above class personl as human
var human = /** @class */ (function () {
    function human(name, isCool, email, pets) {
        this.name = name;
        this.isCool = isCool;
        this.email = email;
        this.pets = pets;
    }
    human.prototype.sayMyName = function () {
        console.log("Your not Heisenberg, you're ".concat(this.name));
    };
    return human;
}());
var person3 = new human('Danny', false, 'dane.com', 1);
console.log(person3.name);
console.log(person3.sayMyName());
