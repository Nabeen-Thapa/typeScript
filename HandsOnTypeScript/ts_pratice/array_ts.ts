let ids : number[] =  [1,2,3,4,5];//only numbers
let names : string []= ['nabin', 'ram', 'hari'];//only string
let options: boolean[] = [true, false, false];//only booleans
let books :object[] = [
    {name: 'food by randomness' , auhter:'Ramesh'},
    {name: 'typescript' , auhter:'T.son'},
];//only onjects beacuse book is defines as array object :let books :object[] 
console.log(ids);
console.log(names);
console.log(options);
console.log(books);
let arr : any[] = ["hello" , 1, true];
console.log(arr);
ids.push(7);
console.log(ids);

// or we can dedfine as :
//let personDetails: (string |number | number | boolean)[] = ['Danny', 1, true]
//or
let personDetails: [string, number, number, boolean] = ['nabin',30, 987655578, true];
console.log(personDetails);//output :[ 'nabin', 30, 987655578, true ]

personDetails[0]= "thapa";
console.log(personDetails);//output : [ 'thapa', 30, 987655578, true ]

