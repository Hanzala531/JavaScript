//Variables and functions are hoisted which means there declaration is moved on the top of the code the below is the demo
// console.log(a);

var a = 12;
// var a; declaration
// a =12;initialization

// var is in es5
// let and const are in es6


//Function Scoped
function abcd(){for (var i = 0; i <5 ; i++) {
    console.log(i);//var can be used outside the loop if declared inside loop mean used anywhere in the function
}
console.log(i);
}

abcd();




// all the data and intermediate data are stored in heap memory
// what is it ?
// it is a memory where all the data is stored  and it is a large memory 