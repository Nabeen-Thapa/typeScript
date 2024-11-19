var ids = [1, 2, 3, 4, 5]; //only numbers
var names = ['nabin', 'ram', 'hari']; //only string
var options = [true, false, false]; //only booleans
var books = [
    { name: 'food by randomness', auhter: 'Ramesh' },
    { name: 'typescript', auhter: 'T.son' },
]; //only onjects beacuse book is defines as array object :let books :object[] 
console.log(ids);
console.log(names);
console.log(options);
console.log(books);
var arr = ["hello", 1, true];
console.log(arr);
ids.push(7);
console.log(ids);
// or we can dedfine as :
//let personDetails: (string |number | number | boolean)[] = ['Danny', 1, true]
//or
var personDetails = ['nabin', 30, 987655578, true];
console.log(personDetails);
personDetails[0] = "thapa";
console.log(personDetails);
