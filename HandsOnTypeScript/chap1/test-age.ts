interface User{
    name : string;
    age : number;
}
function canDrive(usr: User){
    console.log("user is ", usr.name);

    if(usr.age>=16){
        console.log("allow to drive");
    }else{
        console.log(" do not allow to drive");

    }
}

const tom:User = {
    name: "tom",
    age :12
}
canDrive(tom);