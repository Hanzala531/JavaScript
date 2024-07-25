// Continuing Objects Of JavaScript Part 02
// discussed about object literals in previous file now discussing about SINGLETON OBJECTS

const MetaUser = new Object(); //SINGLETON OBJECT

// console.log(MetaUser);

const InstaUser = {}
InstaUser.id = "1231as";
InstaUser.name = "Hanzala Tahir";
InstaUser.isloggedin = "false"

// console.log([InstaUser]);


//there can also be an object within an object
// console.log("\n\n\n");

const regularUser = {
    name: "Hanzala",
    E_Mail: "hanzalatahir@gmail.com",
    fullname: { // Bcz it is an object from key of another so we will use this symbal ( : )
        Userfulname: {
            F_Name: "Hanzala  ",
            L_Name: "Tahir ",
        }
    }

}

// console.log(regularUser.fullname.Userfulname.L_Name);
// Commented all above LOgs for easy understanding of code


const obj1 = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",

}
const obj2 = {
    5: "e",
    6: "f",
    7: "g",
    8: "h",

}

// Object Assign Method
/*Object assign is a static method which copies objects from one or more sources to targetted object
we can simply say adds two and returns third*/
const obj3 = Object.assign({}, obj1, obj2); // giving wmpty paranthesis is not compylsory but it assures value to be corrrect


console.log(obj3);


// Using spread method for objects

const obj4 = {...obj1, ...obj2 } //This syntax is most wideky used
console.log("\n", obj4);


//ANOTHER SYNTAX FOR USING OBJECTS
// Users when mostly come from data base then we will have array of objects
const Users = [{
        id: "1",
        E_Mail: "H@gmail.com"
    }] //How to access this 
console.log(Users[0].E_Mail);

//OBJECT. Keys 
console.log(Object.keys(InstaUser)); //Most important and interesting in js and we can apply loops on them
//Object.values
console.log(Object.values(InstaUser));
// Object.entries
console.log(Object.entries(InstaUser));


// Has own property
console.log(InstaUser.hasOwnProperty("isloggedin"));