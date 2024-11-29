"use strict";
//union (OR -> | ) type
//it is used when only some property of object need to be satisfy , so we use |
//e.g
let UnionObj = null;
UnionObj = {
    name: "union",
    phone: 9876543211
};
console.log(UnionObj);
//note : if we wnat ot make null to any property first make null to variable like UnionObj:null in above code
//in above code we set name, age and number as null property but set only values of name and phone it don't shows any warning lines like intesection
