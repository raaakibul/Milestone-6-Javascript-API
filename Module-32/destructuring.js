const student = {name:"Rakibul Islam", sid:'18201014',phone:'989034893'}

console.log(student.name);
console.log(student.phone);
console.log(student.sid);

let a = "codemarch"
let result = a.substring(2,4)
console.log(result);

const company = {
    name:'GP',
    ceo:{id:1, name:'Ajmol', food:'Fucka'},
    web:{work:'Website dev.'}
 }

 const {work} = company.web
 const {food,id,name} = company.ceo
 console.log(work,food,id,name);
