console.log("object and class:");

class Support{
    name = 'Aamir';
    designation = 'support web dev';
    address = "Bd";

    constructor(name){
        this.name = name;
    }
    startSession(){
        console.log("start a support session");
    }
}

const aamir = new Support('Amir');
const salman = new Support('Salman');
console.log(aamir);
console.log(salman);

 