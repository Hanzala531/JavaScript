fetch('https://eportal.kfueit.edu.pk/')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))