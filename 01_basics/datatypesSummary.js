// primitive 
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreVlaue = 100.3
const osLoggedIn = false
const outTemp = null
let userEmail;
// for Symobol

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
// for BigInt
const bigNumber = 34578707078686576453n
console.log(typeof(bigNumber));

// Non-Primitive(Reference type):
// Array,Objects, Functions

const heros = ["shaktiman", "naagraj", "ironman"];

let myObj = {
    name: "Ankana",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof(outTemp));
console.log(typeof(myFunction));
console.log(typeof(anotherId));


 