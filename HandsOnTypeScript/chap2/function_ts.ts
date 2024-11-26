//function in typescript

function square(num:number):number{
    return num * num;
}
console.log(square(5));//25


//arrow function-ES6

const cube = (n:number, n1?:number) =>{ //n1? mens n1 is optionl
    return n*n *n;
}
console.log(cube(3)); //27