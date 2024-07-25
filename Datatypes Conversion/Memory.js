//All Primitive Datatypes go into stack memory as in below code

let name = "Ali";
let anothername= name;

console.log(anothername);

// as in this case name and another name are two different primitve data types and each have its own space in memory in form of stack  and value of one can be assigned to another by its refference but it will be stored sparately
// changing one will not affect the other as below

anothername="Ahmed";
  
console.log(name);

console.log(anothername);
// the above was how stack memory in javascript works 
//NOW taking an example about working of heap memory .This memory is used when comes into use when refference of one is assigned to another discussed in example below

let user={
    Nameofuser:"Ahmed",
    E_mail:"user@gmail.com"
}

let user2=user;

console.log(user);

user2.E_mail="Hanzala@gmail.com";

console.log(user);

// It is how the heap memory works when an object is created its name is stored in stack memory while the content of obejct goes to heap memory we can say that we give it refference
//Thats why for the when USEROBJECT is created and is assigned to user2 the refference of user in heap memory is assigned to user2 : when we changed the E_mail using reference from user2 the value of E_mail in whole oject changes bcz the reference of object was assigned to user2 and it is also differentiated in both "Console.log" statements 

// THIS iS how memory in java script works



