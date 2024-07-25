//ARRAYS Part ! in JAVASCRIPT

const myArray = [0, 1, 2, 3, 4, 5];
// Arrays of JavaScript are resizeable mtlb hm in me element brdha ya ghta bi skta hai

console.log(myArray[2]);

// another method of declaring an array in java Script
// ARRAY IN JAVASCRIPT CAN ALSO BE DECLARED AS AN OBJECT And VAlues can be passed to array as parameters
const array = new Array(5);
myArray[6] = "hanzala";
console.log(myArray);
// array[0] = 451;
// array[1] = 31;
// array[2] = 16;
// array[3] = 11;
// array[4] = 123;
// array[5] = 112;
// array[6] = 61;
console.log(array.length);
console.log("\n========== Methods In Arrays ==========\n");
const NewArray = new Array(1, 2, 3, 4, 5, 6, 7, )

//PUSH METHOD IN ARRAY
//The push method is basically used to add a value in array simplly we can say that if we want to add an element in the length of an array we can use this method
NewArray.push(10);
console.log(NewArray);
// we can see in its that 10 will be added to the end of array which was added using push method

// POP METHOD in array is used to remove an element from the end or array simply we can say that the pop method in array is exactly the oposite of push method 
NewArray.pop();
console.log(NewArray);
// 10 will be removed from array now if we again use pop method the last element which is 7 will also be removed from array
NewArray.pop();
console.log(NewArray);

//Now understanding unshift and Shif method
const Test = [1, 2, 3, 4, 5, 6];
//USHFT is like push method but it adds a given element at 0 index of array
Test.unshift(10);
console.log(Test);

//SHIFT METHOD is like pop method but it removes element from zero index of array
Test.shift();
console.log(Test);

//INCLUDES METHOD is used to check whether an element is present in an array or not
console.log(Test.includes(6));
console.log(Test.includes(8));

//INDEX OF method is used to determine the index of a specific elemnt in an array
console.log("The index of given element in array is", Test.indexOf(6));

//  .JOIN METHOD  adds the element of an array into a string
//means it convert the datatype of array into string datatype
console.log(Test);
console.log("Datatype of Test array before using .join  is ", typeof(Test));
console.log(Test.join());
console.log("Datatype of Test array After using .join  is ", typeof(Test.join()));
// Studying slice and splice method of array 

const Examine = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("\n\nSLICE METHOD");
//Slice method basically copies a portion of array between two given indexs The last index given in slic method is not included
console.log("Array Before applying slice method is ", Examine);
const myN1 = Examine.slice(1, 4);
console.log("Slice Array", myN1);
console.log("Orignal Array after applying slice method is", Examine);

//Splice method
console.log("\n\n Splice Method");
console.log("Array Before applying splice method is", Examine);
const myN2 = Examine.splice(1, 4);
console.log("Spliced Array", myN2);
console.log("Orignal Array after applying splice method is", Examine);