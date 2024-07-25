const score=400;
console.log(score)

//Explicitly defining that datatypes should be only number

const age=new Number(20);
console.log(age);

console.log(age.toString())
// console.log(typeof(age));

// fixed percision value

console.log(age.toFixed(2));

//significant figures in javascript
const otherNumber=123.123;
console.log(otherNumber.toPrecision(4));

//Commas putting automatically
const value = 100000000;
console.log(value.toLocaleString());
//simply using toLocalString will put on commas according to british or Ammerican standard and if we define the local string then it will put commas according to Indian or Pakistani Standards as shown in the example below
console.log(value.toLocaleString('en-IN'));

