"use strict";
//A never type is used to indicate a function that never returns (completes), or a variable that is not set to anything, not even null.
function oldEnough(age) {
    if (age > 59) {
        throw Error("too old");
    }
    if (age <= 18) {
        return false;
    }
    return true;
}
console.log(oldEnough(80));
