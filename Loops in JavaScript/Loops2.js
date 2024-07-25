// const coding = ["Java", "Cpp", "Python", "Javascript", "Ruby", "Php", "Swift"];

// const Values = coding.forEach((item) => {
//     console.log(item);
//     return item;// This loops doesnot return any value 
// });
// // console.log(Values); //Says Undefined

const Example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const Exmp = Example.filter((num) => num > 4);
// console.log(Exmp);

const Exmp = Example.filter((num) => /*num > 4*/ {
    // num > 4;// returns empty\
    return num > 4;
});
console.log(Exmp);
//Same work can be done with for each loop by using ("  .push methond and conditionals")