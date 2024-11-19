//example of any type

let val:any = 22;
val ="string value";
val = new Array();
//val.push(33);
val.doesnotexist(33);//first add using push the check
console.log(val);
// Since val is of the any type, we can set it to whatever we like and later call push into it since push is a method of Array.