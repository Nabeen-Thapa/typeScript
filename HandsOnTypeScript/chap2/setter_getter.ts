//Getter: A property that allows modification or validation of a related field before returning it
//Setter: A property that allows modification or computation of a value before setting to a related field

class Speaker {
    private messages: string;
    constructor(private name: string) {}
    get Message() {
    if(!this.messages.includes(this.name)){
    throw Error("message is missing speaker's name");
    }
    return this.messages;
    }
    
    set Message(val: string) {
    let tmpMessage = val;
    if(!val.includes(this.name)){
    tmpMessage = this.name + " " + val;
    }
    this.messages = tmpMessage;
    }
    }
    const speaker = new Speaker("john");
    speaker.Message = "hello";
    console.log(speaker.Message);

    //it show error
    //to solve the error we should run below command
    // tsc --target "ES6" setter_getter.ts 
    //now we can run t5his file
    //output :john hello