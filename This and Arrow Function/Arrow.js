console.log("Arrow Function");

function chai() {
    let username = "Hanzala";
    console.log(this);
    // console.log(this.username); //This can only be used in objects we cannot use this keyword in functions
}
chai();
const code = () => {
    user = "Hanzala Tahir";
    console.log(this);
}
code();
//BASIC SYNTAX OF AN ARROW FUNCTION
// = () => {}
//Lets make a function of this type to add two numbers 
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(3, 4));
// Alternativw way for using an arrow function
const addTwo = (num1, num2) => num1 + num2;
//The above is called as an implicit return method in an arrow functiom
console.log(addTwo(3, 4));
// to return objects in implicit return method in arrow function
const arr = () => ({ username: "hanzala" });
console.log(arr());