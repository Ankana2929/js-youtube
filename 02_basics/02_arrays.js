const marvel_heros = ["Ironman", "CaptainAmerica", "Thor", "Hulk"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[4][2]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [2, 9]]]
const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

console.log(Array.isArray("Ankana"));
console.log(Array.from("Ankana"));
console.log(Array.from({name: "Ankana"}));  //Interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
