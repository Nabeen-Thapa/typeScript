//function in typescript

function square(num:number):number{
    return num * num;
}
console.log(square(5));//25


//arrow function-ES6

const cube = (n:number, n1?:number) =>{ //n1? mens n1 is optional
    return n*n *n;
}
console.log(cube(3)); //27


const logMessage = (msg:string)=>{
    console.log(`this is ${msg}`);
}
logMessage('typescript function');//output: this is typescript function



//If we want to declare a function variable, but not define it 
//// Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
let sayHello: (name:string) =>void;
sayHello = (name)=>{
    console.log(`hello ${name}`);
}
sayHello("Ram");