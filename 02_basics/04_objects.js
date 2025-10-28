// const tinderUser = new Object () || This is singleton object

const tinderUser = {} // This is non singleton objects

tinderUser.id = "123abc"
tinderUser.name = "Anny"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "Anku@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ankana",
            lastname: "Jana"
        }
    }

}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4} //spread operator
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 2,
        email: "N@gmail.com"
    },
    {
        id: 3,
        email: "K@gmail.com"
    }
]

console.log(users[1]);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));



