const myNum = [1, 2, 3, 4];

// const Mytotal = myNum.reduce(function(acc, curval) {
//     console.log(`Accumulator : ${acc} and Current_value : ${curval}`);
//     return acc + curval;
// }, 0);

const Mytotal = myNum.reduce((acc, curval) => {
    console.log(`Accumulator : ${acc} and Current_value : ${curval}`);
    return acc + curval;
}, 0)
console.log(Mytotal);