const num = 2;

if (num == 2) {
    console.log("Hanzala Tahir");
} else {
    console.log("False");
}
// false, 0, -0, BigInt 0 n, "", undefined, NaN, null

console.log("The following are the values that can become false");
console.log(`false, 0, -0, BigInt 0n, "", undefined, NaN, null`);

const UserEmail = [];
if (UserEmail.length === 0) {
    console.log("Array is Empty");
}

const MyObj = {};

if (Object.keys(MyObj)) {
    console.log("There is nothing in the object");
}