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
