let interval;

const StartDate = ()=>{
    console.log("Hanzala Tahir");
    console.log(Date.now());          
    interval = setInterval(StartDate,1000);
}

function StopDate (){
    clearInterval(interval);
    console.log("Stopped THe Execution");
    
}




document.querySelector('#start').addEventListener('click',StartDate);

document.querySelector('#stop').addEventListener('click',StopDate);