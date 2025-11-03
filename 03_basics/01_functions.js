
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("A");
}

//sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

// addTwoNumbers(2, 9)

function addTwoNumbers(number1, number2) {                  
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(2, 9)
// console.log("result: ", result);



function loginUserMessage(username = "Sathi") {
    if(!username){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Ankana"))
//  console.log(loginUserMessage("Ankana"));

function calculatecartPrice(val1, ...num1) {
    return num1
}
console.log(calculatecartPrice(200, 300, 900, 2000));


const user = {
    username: "Ankana",
    price: 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "Anku",
    price: 699
})

const myNewArray = [200, 300, 900, 600]
function returnValue(getArray) {
    return getArray [2]
    
}
// console.log(returnValue(myNewArray));
console.log(returnValue([200, 400, 600, 900]));

