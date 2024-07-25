console.log("for in loop");


const Arr = [1, 2, 3, 4, 5];

for (const num in Arr) {
    console.log(num);
}

console.log("for of loop");


const Greetings = "Hello World";

for (const greet of Greetings) {
    console.log(`Each character is ${greet}`);

}