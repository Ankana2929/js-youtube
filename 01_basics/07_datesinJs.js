// +++++++++Date++++++++++
let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 25)
// let myCreatedDate = new Date(2025, 0, 25, 9, 2);
let myCreatedDate = new Date("2025-01-14")
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long",
})


