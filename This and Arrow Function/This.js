// This keyword //creating an object for this
const user = {
    username: "Hanzala",
    price: "99",
    welcomeMessage: function() {
        // console.log(`welcome Mr ${username}`);this will throw an error bcz username not found in function
        console.log(`welcome Mr , ${this.username}`);
        console.log(this, "Current context in object");
    }
}

console.log(user.welcomeMessage());
user.welcomeMessage();
user.username = "hanziii";
user.welcomeMessage();
console.log(this, "current context");