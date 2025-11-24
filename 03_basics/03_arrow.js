const user = {
    username: "Ankana",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // "This" refer the current context.
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "Sathi"
// user.welcomeMessage()
console.log(this);

// function chai() {
//     let username = "Ankana"
//     console.log(this.username);
    
// }
// chai()

const chai =  () => {
    let username = "Ankana"
    console.log(this.username);
    
}
//chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(6, 9))

// const addThree = (num1, num2, num3) => (num1 + num2 + num3)
const addThree = (num1, num2, num3) => ({username: "Ankana"})
console.log(addThree(2,9,6));