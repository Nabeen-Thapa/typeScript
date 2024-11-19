interface speech{
    sayHi (name: string):string;
    sayBye:(name:string) =>string;
}

let sayStuff :speech ={
    sayHi:function (name) {
        return `hi ${name}`;
    },
    sayBye:(name:string)=> `bye ${name}`,
};

console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg