//Dates in JavaScript

let myDate = new Date();
console.log(myDate);
//Theoutput is not readable because we a common person are unable to understand this date and time 
//Now we will to appply different methods on this date to make it more readable

//Applying to string method
console.log("\nTO Sting Method()");
console.log(myDate.toString());

//Applying to date string
console.log("\nTo Date String Method()");
console.log(myDate.toDateString());

//To ISO STRING
console.log("\nTo ISO String Method");
console.log(myDate.toISOString());

//To JSON String Method
console.log("\nTo JSON String Method");
console.log(myDate.toJSON());

//To localeDatestring
console.log("\nTo LocaleDateString()");
console.log(myDate.toLocaleDateString());

//To localeStringMethod
console.log("\ntoLocaleString()");
console.log(myDate.toLocaleString());

//To locale time string
console.log("\ntoLocaleTimeString()");
console.log(myDate.toLocaleTimeString());

//To time string method()
console.log("\ntoTimeString()");
console.log(myDate.toTimeString());

//myDate.toUTCString() Method
console.log("\nmyDate.toUTCString()");
console.log(myDate.toUTCString());

console.log("\n===========================================================================\n");

//Different syntax to create cutomized dates in javascript
let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString());

// if you also want to insert time in date 
let myCreatedDate2 = new Date(2023,0,23,13,30);
console.log(myCreatedDate2.toLocaleString());

// If you wanna date in specific formate like "yy,dd,mm" or other then you have to do like below
let myCreatedDate3 = new Date("2024-01-24");
console.log(myCreatedDate3.toLocaleString());
//mm-dd-yy
let myCreatedDate4 = new Date("01-24-2024");
console.log(myCreatedDate4.toLocaleString());

console.log("\n==============================================================================");
console.log("Time Stamps in dates");
console.log("===============================================================================\n");

//It will give value of date in miliseconds from first january 1970
let myTimeStamp = Date.now();
console.log(myTimeStamp+"  miliseconds");

//To get values of created dates in miliseconds
console.log(myCreatedDate.getTime()+"  miliseconds");

//how to convert date from miliseconds into seconds
console.log(Math.floor(Date.now()/1000));
console.log("\n============================================================================\n");
//Extracting specific information from date 
let newDate = new Date();
//Get Day from date
console.log(newDate.getDay());

//Get month()
console.log(newDate.getMonth());
//month start from 0 in js so to overcome this
console.log(newDate.getMonth()+1);

//Get Day
console.log(newDate.getDay());

//Get Hours()
console.log(newDate.getHours());
//the above can be used to print complex dates
console.log(`${newDate.getDay()} and ${newDate.getDate()} and ${newDate.getMonth()} and ${newDate.getFullYear()}`);

console.log("local String in Detail");
// we date also give different arguments or requirements to this method because it is an ibject in itself
console.log(newDate.toLocaleString(`default`,{
    weekday: "long",
    // timeZone: (`GMT+5`)
    // and we cam pass futher more arguments to this 

}));