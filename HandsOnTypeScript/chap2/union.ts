//union (OR -> | ) type
//it is used when only some values of object need to be satisfy , so we use |
//e.g
let UnionObj: {name: string} | {age: number}={
    name :"union"
}
console.log(UnionObj);
//in albove code we set name and age  property but set only values of name it don't shows any warning lines like intesection