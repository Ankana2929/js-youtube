const accountId = 144553
let accountEmail = "ankanajana05@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

//accountId = 2 // not allowed

accountEmail = "ank9@gmail.com"
accountPassword = "232112"
accountCity = "Contai"

console.log(accountId);
/*
prefer not to use var because of issue in block scope and funtional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])