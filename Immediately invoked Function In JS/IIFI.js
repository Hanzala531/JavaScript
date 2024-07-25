console.log("Immediately Invoked Function In JavaScript");

(function myFunc() { //named iffi
    console.log(`DataBase Is Connected`);
})();

(() => { //unnamed iffi
    console.log(`DataBase Two is Also Connected`);
})();
//Why we us Immediately Invoked Function Expression 
// we use this function to prevent our function from function of global scope
//We can also pass value in this way to the function
((name) => {
    console.log(`DataBase Two is Also Connected Mr , ${name}`);
})("Hanzala");