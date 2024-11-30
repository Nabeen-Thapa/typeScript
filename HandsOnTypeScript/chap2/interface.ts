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

// You can also define an object type using a type alias:
type Person1 = {
    name: string;
    age: number;
  };
  
  function sayHlo(person1: Person1) {
    console.log(`Hlo ${person1.name}`);
  }
  
  sayHlo({
    name: 'Hari',
    age: 48,
  }); // Hi John
  