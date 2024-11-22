var sayStuff = {
    sayHi: function (name) {
        return "hi ".concat(name);
    },
    sayBye: function (name) { return "bye ".concat(name); },
};
console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg
