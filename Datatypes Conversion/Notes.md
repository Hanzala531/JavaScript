//Conversion of Datatypes
let age=undefined;
let score=33;
console.log(typeof score);
console.log(typeof (age));
let numvalue = Number(age);
let STvalue = String(score);
console.log(numvalue);
console.log(STvalue);

// this is how conversion between different datatypes takes place in java sript
// if a number in string is not a number than it will show NaN whixh means not a number

//OUTPUT
PS C:\JavaScript> node index.js
PS C:\JavaScript> node index.js
number
string
PS C:\JavaScript> node index.js
string
PS C:\JavaScript> node index.js
number
string
10
PS C:\JavaScript> node index.js
number
string
33
PS C:\JavaScript> node index.js
number
string
33
PS C:\JavaScript> node index.js
if age = "10A"
number
string
NaN
33
PS C:\JavaScript> node index.js
if age = null
number
object
0
33
PS C:\JavaScript> node index.js
if age = undefined
number
undefined
NaN
33
PS C:\JavaScript>



