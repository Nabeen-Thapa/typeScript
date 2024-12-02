class classA{
    static typeName :string;
    constructor(){}
    static getFullName(){
        return "classA " + classA.typeName;
    }
}
//const a = new classA();
console.log(classA.typeName);