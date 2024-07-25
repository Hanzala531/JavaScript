// SCOPE IN JAVASCRIPT
// Basically depends in let var on const on which it revolves and start from these 
// var c = 300; 
let a = 300; {
    // Basically Curly braces is called as scope mainly
    if (true) {
        let a = 10;
        const b = 20;
        // var c = 30;
        console.log(a);
    }
}
console.log(a);
// console.log(b);
// console.log(c);

//any values declared globally without scope is availible inside scope but value declared inside scope is not availible outside it but in case of var it is availible outside also thats why we should avoid var
console.log("\n========Scope Level And MiniHosting========\n");
//Nested Scope
function one() {
    const username = "Hanzala";

    function Two() {
        const Wesbsite = "Youtube";
        console.log(username);
    }
    // console.log(Wesbsite);
    Two();
}
one();

if (true) {
    const username = "Hanzala Tahir ";
    if (username == "Hanzala Tahir ") {
        const website = " Facebook";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);
console.log("\n\n**************** INTERESTING *****************");

AddOne(5);

function AddOne(num) {
    return num + 1;
}

// AddOne(5);it is also ok
// addTwo(5);Its throws error bcz function was declared as a variable so we should avoid that type function
const addTwo = function AddOne(num) {
    return num + 2;
}
addTwo(5);