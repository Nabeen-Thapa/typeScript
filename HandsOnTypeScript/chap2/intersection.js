"use strict";
//intesection (& -> AND) types
//it combine multiple types in one e.g obj: {name:string}& {age:number}
//use to satisfy all the value of objects so in here '&' is used
let obj = {
    name: 'Nabin',
    age: 30
};
console.log(obj);
//or
let newObj;
newObj = { name: "new_Nabin", age: 40 };
console.log(newObj);
//another in this intersection type we have to give all hte values if we don't give alll values it shows error
//e.g
let newObj1;
newObj1 = { name: "new_Nabin", age: 40 };
console.log(newObj1);
//this code shows errros like property age is missing , so it so warning in newObj1 
//if we need satisfy only some values we use union
