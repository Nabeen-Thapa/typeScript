class Runner{
    static lastRunTypeName :string;
    constructor(private tpyeName: string){}
    run(){
        Runner.lastRunTypeName =  this.tpyeName;
    }
}

const run1=  new Runner("a");
const run2=  new Runner("B");
run1.run();
run2.run();
console.log(Runner.lastRunTypeName);