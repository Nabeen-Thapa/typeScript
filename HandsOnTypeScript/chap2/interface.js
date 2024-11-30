//Interfaces define how an object should look:
function sayHi(person) {
    console.log("Hi ".concat(person.name));
}
sayHi({
    name: "ram",
    age: 30
});
