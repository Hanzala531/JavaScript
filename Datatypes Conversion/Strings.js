const name = "Hanzala";
const Age = "20" ; 
//OLD SYNTAX FOR STRING CONCATINATION
console.log(name + Age );

// MODERN WAY

console.log(`Hello my name is ${name.toLowerCase()} and my age is ${Age}`);

//another way to declare string

const gameName = new String(`Hanzalahanzii`)

console.log(gameName);
//index access
console.log(gameName[3]);
//prototype access
console.log(gameName.__proto__);
//length access
console.log(gameName.length);
//character at position
console.log(gameName.charAt(2));
//index of character
console.log(gameName.indexOf("i"));

// creating a new string from previously existing string from between given two indexws

const newString=gameName.substring(1,6);
console.log(newString);

//STRING SLICING
const anotherString = gameName.slice(-8, -4);// it has some kind of error i will have to solve it further 
console.log(anotherString);

//TRIM METHOD IN STRING
const newStringOne= "         Hanzala       ";
console.log(newStringOne);
console.log(newStringOne.trim());

//Replace Method in String
const url = "https://hanzalatahir.com/hanzala%20Tahir"
 console.log(url.replace('%20','-'));

//include method to check whether something is included in string URL
console.log(url.includes('hanzalatahir'));

// split method in string //split on bases of which you want mean if your string hai backslash you can split on bases of those characters but you can split on bases of space and you can also give limit to which you want to split
const newST="hello i am learning java script for backend development";
//without limit just separator

console.log(newST.split(' ','5'))