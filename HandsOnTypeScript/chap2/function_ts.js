//function in typescript
function square(num) {
    return num * num;
}
console.log(square(5)); //25
//arrow function-ES6
var cube = function (n, n1) {
    return n * n * n;
};
console.log(cube(3)); //27
var logMessage = function (msg) {
    console.log("this is ".concat(msg));
};
logMessage('typescript function'); //output: this is typescript function
//If we want to declare a function variable, but not define it 
//// Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
var sayHello;
sayHello = function (name) {
    console.log("hello ".concat(name));
};
sayHello("Ram");
