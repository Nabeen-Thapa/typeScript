//intesection (& -> AND) types
//it combine multiple types in one e.g obj: {name:string}& {age:number}
//use to satisfy all the value of objects so in here '&' is used
let obj: {name:string}& {age:number}={
    name :'Nabin',
    age :30
}
console.log(obj);
//or
let newObj :{name: string} & {age:number};
newObj = {name : "new_Nabin", age: 40}
console.log(newObj);

//another in this intersection type we have to give all hte values if we don't give alll values it shows error
//e.g
let newObj1 :{name: string} & {age:number};
newObj1 = {name : "new_Nabin"}
console.log(newObj1);
//this code shows errros like property age is missing , so it so warning in newObj1 
//if we need satisfy only some values we use union