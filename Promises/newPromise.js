// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true ;
//         if (!error){
//             resolve({username:"Javascript",pasword:"1234"})
//         } else {
//             reject("Error , Js went wrong")
//         }
//     },1000)
// })

// async function ConsumePromise() {
//     try {
//      const response = await promise ; 
//     console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }



// ConsumePromise();



async function GetAllUsers() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const Data = await response.json();
    console.log(Data);
    } catch (error) {
        console.log("Error", error);
        
    }
    
}

// GetAllUsers();
//Trying to fetch directly

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))