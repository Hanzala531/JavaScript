//ARRAYS IN JAVASCRIPT CONTINUED
const MCU_Heroes = ["Ironman", "Captain America", "Thor"];
const DC_Heroes = ["Superman", "Batman", "Flash"];

//Trying to push an array into another directly

MCU_Heroes.push(DC_Heroes);
console.log(MCU_Heroes);
//In output there will be an array in array means due to we direct pushed in output it added second array in the first means THERE WILL BE AN ARRAY IN ARRAY
// as we learned earlier that array can take any data into it so by this it is also proved bcz the first array took second array which was pushed as a single data input at single index
console.log(MCU_Heroes[3][2]);
// To acces second array pushed in the first one we can use the above stated method
MCU_Heroes.pop();

//CONCAT METHOD
// it adds two arrays and create a new array but it has a limitation that it can add only two elements
const allHeroes = MCU_Heroes.concat(DC_Heroes);
console.log(allHeroes);

//Spread Operator
//It spreads all the elements of array as individual elemenrs and we can take more than two values
const newHeroes = [...MCU_Heroes, ...DC_Heroes];
// did same as concat method but in diff way


//Flat Method
// it just needs depth to which sole and solve the subarrays at given depth and convert it into single arrya
//Tackle with nested in nested array 

const fake = [0, 1, 2, [3, 32], 4, 5, [6, 7], 8];
// const fakeTry = [...fake, ...fake[3], ...fake[6]];
// console.log(fakeTry);//[ 0, 1, 2, [ 3, 32 ], 4, 5, [ 6, 7 ], 8, 3, 32, 6, 7 ]
// // This was just a mind idea or we can say attempt to solve but it will never work

const Real = fake.flat(2);
console.log(Real);

//Checking arrays and conversion to arrays
console.log("\n\nChecking arrays of convert to arrays \n");


//CHECK ARRAY


console.log(Array.isArray("Hanzala")); // it tells wheter given string element of variable is array or not and answers in boolean
console.log(Array.from("Hanzala")); // will convert intp array from non array
// Trying to check array using multiple itenms
const score = 100;
const score2 = 200;
const score3 = 300;
const score4 = 400;
// we can check multiple variables at a time but the answer will not be accurate if any one of checked items is an array while others are not array the answer will be false and the actually present array will be neglected
// console.log(Array.isArray(score, score2, score3, score4));


//FROM METHOD
// console.log(Array.from(score, score2));//Throughs error bcz we can convert only one item using from method

// console.log(Array.from(score));

console.log(Array.from({ name: "Hanzala" })); // interesting for interview bcz we have to define whether we want  to convert keys into array or values of keys

console.log("we cannot convert variables into array using from method");

// OF METHOD
//This method is used to convert a variable or multiple variable items into a new  array

console.log(Array.of(score, score2, score3, score4));