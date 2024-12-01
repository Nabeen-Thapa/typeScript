//Getter: A property that allows modification or validation of a related field before returning it
//Setter: A property that allows modification or computation of a value before setting to a related field
class Speaker {
    constructor(name) {
        this.name = name;
    }
    get Message() {
        if (!this.messages.includes(this.name)) {
            throw Error("message is missing speaker's name");
        }
        return this.messages;
    }
    set Message(val) {
        let tmpMessage = val;
        if (!val.includes(this.name)) {
            tmpMessage = this.name + " " + val;
        }
        this.messages = tmpMessage;
    }
}
const speaker = new Speaker("john");
speaker.Message = "hello";
console.log(speaker.Message);
