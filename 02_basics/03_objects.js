//Singleton

// Object Literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Ankana",
    "full name": "Ankana Jana",
    [mySym]: "mykey1",
    age: 23,
    location: "Kolkata",
    email: "Ankana@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Staurday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "Ankana@chatgpat.com"
// Object.freeze(JsUser)
JsUser.email = "Ankana@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this["full name"]}`);
    
}
console.log(JsUser.greetingTwo());
