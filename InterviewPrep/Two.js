//  Execution context means whenever we create a function it will create its own imagery container 

    // This container is called a Execution Context

    // Execution Context has three main parts:

    // 1. Global Execution Context: This is the first execution context when your script starts running. It contains the global object (window in browser), the this keyword, built-in functions, and any variables declared at the top level of your script.
    // 2. Function Execution Context: This occurs when a function is called. It has access to its own variables, the arguments passed to the function, and the this keyword.
    // 3. Eval Execution Context: This occurs when eval() is used to execute JavaScript code. It has access to the global object, the this keyword, and the variables from the surrounding scope.
    

// Lexical Environment: This is the environment in which a piece of code is written. It includes the variables that are in scope at that point in the code, as well as the value of this and any other relevant information.

// it tells what u can access and what u can't access




// how to copy refferences from other array or its cariables

let array1 = [1, 2, 3];
let array2 = [...array1]; // This is a reference copy

array2.pop();

console.log(array2);


