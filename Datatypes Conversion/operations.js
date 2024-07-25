let value = 23 ;
let negvalue = -value;
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%2);

console.log( 2 + "1");
console.log("2"+1);
console.log("2"+"1");


console.log("1"+2 + 2 );
// it will be automatically prioritized in java script based on first value as in this case the fist was a string thats why the other two also converted into string and the output of this will be ==> 122
console.log(2 + 2  + "1");
// and in this case the output will be ==> 41 bcz 2 + 2 is plus added and then converted into string

//BUT THE BEST PRATICE IS ........

console.log((2+2)-(3*3)%2);

console.log(+true);//==>1

console.log(+"");//==>0
 
// prefix and postfix increment operators are also equal in js
let counter=12;
// counter++;
// console.log(counter);//==>13    first incremented then printed
++counter;
console.log(counter);//==>12 first printed then incremented
