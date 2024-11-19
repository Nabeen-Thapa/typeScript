// let val: unknown = 22;
// val = "string value";
// val = new Array();
// val.push(33);//this code shoe error in this push, when i set val as array it don't know push method of array because val is unknow type before
// console.log(33);
//above code show error in push due to the unknow variable "val"
//so we use guards to prove the val is of cetain type
var val = 22;
val = "string value";
val = new Array();
if (val instanceof Array) {
    val.push(33);
}
console.log(val);
