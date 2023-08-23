console.log("object and class:");

class Support{
    name = 'Amir';
    designation = 'support web dev';
    address = "Bd";

    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log( this.name, "start a support session");
        console.log("he is in ", this.address);
    }
}

const amir = new Support('Amir', 'BD');
const salman = new Support('Salman');
amir.startSession();
// console.log(salman);

 