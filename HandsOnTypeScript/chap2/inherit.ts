class vehicle{
    constructor(private whellCount : number){}
    showNumbersOfWhells(){
        console.log(`moved ${this.whellCount} miles`);
    }
}

//motorclycle inherit the properties of vehicle
 class motorcycle extends vehicle{
    constructor(){
        super(2);
    }
 }
 //Automobile inherit the properties of vehicle
 class Automobile extends vehicle{
    constructor(){
        super(4);
    }
 }

 const motorCycle = new motorcycle();
 motorCycle.showNumbersOfWhells();
 const AutoMobile = new Automobile();
 AutoMobile.showNumbersOfWhells();

 //output:
 //moved 2 miles
// moved 4 miles