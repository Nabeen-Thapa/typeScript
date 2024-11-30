//Interfaces define how an object should look:

interface person{
    name:string;
    age:number;
}
function sayHi(person: person){
    console.log(`Hi ${person.name}`);
}

sayHi({
    name:"ram",
    age:30
});