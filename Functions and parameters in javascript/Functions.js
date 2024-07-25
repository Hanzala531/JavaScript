console.log("======= FUNCTIONS IN JAVASCRIPT ======");
//Almost same as in other languages
console.log("\nFunction to add two numbers");

function addNumbers(number1, number2) {
    // return number1 + number2;if we use this syntax then we need to call and get values of function un console log
    console.log(number1 + number2);
}
// console.log(addNumbers(23, 43));
addNumbers(12, 12);

function multiplyNumbers(number1, number2) {
    const result = number1 * number2;
    return result;
    //nothing can be printed after return keyword
}
const result = multiplyNumbers(12, 4);
console.log(result);

function UserLoginMessage(username) {
    if (username == undefined) {
        console.log("Please Enter A Username");
        result;
    } else {
        return `${username} just logged in`
    }
}
// function UserLoginMessage(username) {
//     if (username != undefined) {
//         return `${username} just logged in`
//         } else {
//             console.log("Please Enter A Username");
//             return;
//     }
// }
console.log(UserLoginMessage("Hanzla\n\n\n"));
// Rest Operator i.e(...num) it spreads the values into an array from large number in short forms an array of values
function CartTotal(...num) {
    return num;
}
console.log("Total value is : ", CartTotal(12, 121, 22423, 123));
console.log("\n\FUNCTIONS WITH OBJECTS\n");
const User = {
    username: "Hanzala Tahir ",
    price: "1200"
}

function handleObject(anyobject) {
    console.log(`The username is ${anyobject.username} and the price is ${anyobject.price}`);
}
handleObject(User);
handleObject({
    username: "Hanzala Tahir ",
    price: "1200"
})
console.log("\nFUNCTIONS WITH ARRAYS\n");
const Array = [200, 400, 600, 100];

function ReturnSecondVaalue(GetArray) {
    return GetArray[1];
}
console.log(ReturnSecondVaalue(Array));