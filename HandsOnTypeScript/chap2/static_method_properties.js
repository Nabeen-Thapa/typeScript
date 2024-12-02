var classA = /** @class */ (function () {
    function classA() {
    }
    classA.getFullName = function () {
        return "classA " + classA.typeName;
    };
    return classA;
}());
//const a = new classA();
console.log(classA.typeName);
