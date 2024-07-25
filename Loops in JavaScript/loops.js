const map = new Map();
// Map is an object that operates on key values 
// it keeps the insertion order of key mean it remembers in which way of the keys are entered /
// objects doesnt hold the insertion order of key values
map.set('Pak', "Pakistan");
map.set('USA', "United States Of America");
map.set('UAE', "United Arab Emirates");

// console.log(map);
//For of loop on map 

for (const [key, value] of map) {
    console.log(key, ":-", value);
}
//For of loop on object

const MyObj = {
    name: "Hanzala Tahir ",
    Username: "Hanzalatahir@gmail.com",
    Nationality: "Pakistani"
}

// for (const Key of MyObj) {
//     console.log(key);
// }Object is not iteratable using for of loop
//For in loop works for objects

// for (const key in MyObj) {
//     console.log(key);
// }        IN THIS WAY ONLY KEYS WILL BE GIVEN 
// for values at keys

for (const key in MyObj) {
    //     console.log(key, ":-", MyObj[key]);
    //     console.log(`${key} is for ${ (MyObj[key])}`);
}
// console.log("\n\n\n");
// Trying to apply for in loop on array

const MyArray = [1, 2, 3, 4, 5];

for (const key in MyArray) {
    console.log(key);
    //This Loop Prints keys not directly the value
}


// MAP IS NOT ITERATEABLE USING FOR IN LOOP

const Coding = ["Java", "CPP", "PYTHON", "JAVASCRIPT"];

Coding.forEach(function(item) {
    //     console.log(`We are talking about ${item} programming language`);
})

// using Arrow function

Coding.forEach((item) => {
    // console.log(`We are talking about ${item} programming language`);
})

// ALTERNATIVE

function PrintMe(item) {
    console.log(item);
}

// Coding.forEach(PrintMe);

Coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const Langs = [{
        LangName: "Java",
        LangFile: "Java"
    },
    {
        LangName: "Python",
        LangFile: "PY"
    },
    {
        LangName: "JavaScript",
        LangFile: "JS"
    }
]

Langs.forEach((item) => {
    console.log(item.LangName);
})