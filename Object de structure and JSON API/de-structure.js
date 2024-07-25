// OBJECT DE STRUCTURE AND INTRO TO JSON API
const Course = {
        name: "JAVASCRIPT",
        price: "1200",
        instructor: "hitesh"
    }
    // to use any value in an oject say name we use  
console.log(Course.name);
// there is no problem with that syntax it can be hactic some times for programmer so for ease of use we can also use an alternative syntax as given below
const { instructor } = Course;
const { price: cost } = Course; //we can also change name of value
console.log(instructor);
console.log(cost);
//This is called as object de structuring
// console.log("\n============== JSON API =================\n"); {
//     "name": "Hanzala Tahir",
//     "series": "web dev ",
//     "price": "no price"
// }
//API can also be called as arrays
// [
//     {},
//     {},
//     {}
// ]