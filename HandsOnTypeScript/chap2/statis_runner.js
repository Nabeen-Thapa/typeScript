var Runner = /** @class */ (function () {
    function Runner(tpyeName) {
        this.tpyeName = tpyeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.tpyeName;
    };
    return Runner;
}());
var run1 = new Runner("a");
var run2 = new Runner("B");
run1.run();
run2.run();
console.log(Runner.lastRunTypeName);
