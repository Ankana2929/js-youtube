let a = 90

if (true) {
    let a = 10
    const b = 20
    //var c = 30
    //console.log("Inner:", a);
    
}


// console.log(a);
// console.log(b);
//console.log(c);


function one (){
    const username = "Ankana"

    function two() {
        const website = "Youtube"

        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
// one()

if (true) {
    const username = "Ankana"
    if (username === "Ankana") {
        const website = " Youtube"
        //console.log(username + website);
        
    }
}


// +++++++++++++++++++++++++Interesting++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
    return num + 1
}



// console.log(addTwo(7))
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(7))
