// Singleton "when we make objects with the constructor"

//Object literals    objects made with the help of string literals

// creating an Object using object literals method

const User = {
    name: "Hanzala",
    "Full Name": "Hanzala Tahir",
    age: "20",
    Location: "Rahim Yar Khan",
    E_mail: "hanalatahir@gmail.com",
    "isLoggedin": false,
    LastLoginDays: ["Monday", "Saturday"]

}

// The keys of object are automatically reffered and stored as strings in javascript
// To access particular item of an object we use 
console.log(User.E_mail);
//To change item
User.E_mail = "Hanzala@google.com";
console.log(User.E_mail);

// ALteNative way to access Item

console.log(User["age"]);


// if the key of obejct is defined manually as a String we can not use dot method to access that specific key item
// console.log(User.Full Name);
//It will Thruough error because the key was declared as a String manually and we cannot use space in log so thats why it is throwing error due to use or space 

console.log(User["Full Name"]); //This will not through any error bcz we used it as string in log this method is useful

//We can access keys manually defined keys as string by using both DOT and STRING method if they dont have any space between them
console.log(User.isLoggedin); //as we accessed
console.log(User["isLoggedin"]);


//"Decalare a symbal Add it in object keys show it as symbol in keys and show "
const mySymb = Symbol();
console.log(typeof(mySymb));
const User2 = {
    name: "Hanzala",
    // mySymb: "myKey1",wrong syntax
    [mySymb]: "myKey1", //correct syntax
    "Full Name": "Hanzala Tahir",
    age: "20",
    Location: "Rahim Yar Khan",
    E_mail: "hanalatahir@gmail.com",
    "isLoggedin": false,
    LastLoginDays: ["Monday", "Saturday"]

}

// console.log(User2["mySymb"]);
// console.log(typeof(User2["mySymb"]));
//To use it as symbal we have specific syntax we need to use to define key using sqare brackets[] as above 2nd time
console.log(User2[mySymb]);
// {
//     name: 'Hanzala',
//     'Full Name': 'Hanzala Tahir',
//     age: '20',
//     Location: 'Rahim Yar Khan',
//     E_mail: 'hanalatahir@gmail.com',
//     isLoggedin: false,
//     LastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol()]: 'myKey1'   On using correct syntax this will be the output otherwise symbol will be reffered as normal key
//   }
//ON printing the symbol with this syntax will not change to datatype to symbol the datatype will always remain as a string and value of key will also remain same but that was the CORECT SYNTAX which we used And we need to use this syntax

// FREEZE METHOD  this method will prevent any changes done after usage of this method
Object.freeze(User2);
User2["Full Name"] = "Hanza";
console.log(User2);
console.log("\n\n\n=======FUNCTIONS=======\n");
const User3 = {
        name: "Hanzala",
        "Full Name": "Hanzala Tahir",
        age: "20",
        Location: "Rahim Yar Khan",
        E_mail: "hanalatahir@gmail.com",
        "isLoggedin": false,
        LastLoginDays: ["Monday", "Saturday"]

    }
    //now trying to create use functions
User3.greeting = function() {
        console.log("Hello user");
    }
    // greeting(); this automatically calls function is it is using display methods 
    //NOW adding function to object
console.log(User3.greeting());
console.log("This will remove undefined which was dua to using greeting function in console log");
User3.greeting();
//Now creating another function and using it wil specific key of object
User3.greeting2 = function() {
    console.log(`Hello user ${this["Full Name"]}`);
}
console.log(User3.greeting2());
console.log("This will remove undefined which was dua to using greeting2 function in console log");
User3.greeting2();