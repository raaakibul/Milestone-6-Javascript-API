// console.log("Api");
// Javascript object 

const user = {id:11, name:"Abdur Rahim", job:'Web developer'};
// console.log(user);

// JSON
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop = {
    name:"Store",
    address:"Dhaka",
    products:['pepsi','Biscuit'],
    isExpensive:false
}

const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);
