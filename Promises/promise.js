const promiseOne = new Promise(function (resolve, reject) {
    //Do async tasks 
    setTimeout(function () {
        console.log("Async task is completed");

        resolve();
    }, 100)
});

promiseOne.then(function () {
    console.log("Promise consumed");

})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("task is completed");
        resolve();
    }, 500);

})

    .then(function () {
        console.log("resolved");

    })

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "Hanzala Tahir", Username: "Hanzalatahir@google.com" })
    }, 600)
})

promiseThree.then(function (user) {
    console.log(user);

})

console.log("\n\n");


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true;
        let error = false;
        if (!error) {
            resolve({ usernname: "Hanzala ", pasword: "Hanzalatahirm" });
        } else {
            reject("something went wrong");
        }
    }, 1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
    
})

