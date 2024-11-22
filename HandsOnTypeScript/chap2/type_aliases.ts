// type aliases
// -    this is aimplw method to give a differe name to a tipe anf most of the time it is used to provide shoter simpler name to a complex type 
// like in below e.g 30 also point type and ram also point which is east to rpovide type
type points = 30 | 20 | 10 | "ram";
let score: points =10;
console.log(score);

//another e.g
type ComplexPerson = {
    name: string,
    age: number,
    birthday: Date,
    married: boolean,
    address: string
    } 