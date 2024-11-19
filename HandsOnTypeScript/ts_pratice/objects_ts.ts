//object on typescript
//// Declare a variable called person with a specific object type annotation
let personDetail:{
    name :string;
    location: string;
    isProgrammer : boolean;
}

//assign values to the property
personDetail ={
    name:'ram', //should be string
    location:'usa',
    isProgrammer :true,//should be boolean only
};

console.log(personDetail);
console.log(personDetail.name);