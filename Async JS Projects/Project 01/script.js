const randomColor=function (){
    const hex='0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i <6; i++) {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
console.log(randomColor());
let intervalId;

// document.querySelector('#Start').addEventListener('click',()=>{
//    const interval=setInterval(()=>{
//     if(randomColor()==='#000000'){
//         document.querySelector('body').style.color='white'
//     }else{
//         document.querySelector('body').style.color='black'
//         document.querySelector('body').style.backgroundColor=randomColor()
// }
//    },500);
//    document.querySelector('#Stop').addEventListener('click',()=>{
//     clearInterval(interval)
//    })
// })
const StatChangingColor=function(){
  if(!intervalId){
    intervalId = setInterval(ChangeColor,500);

    function ChangeColor() {
      document.querySelector('body').style.backgroundColor=randomColor();
   }

  }
}

const StopChangingColor=function(){
    clearInterval(intervalId);
    intervalId = null;
}


document.querySelector('#Start').addEventListener('click',StatChangingColor)
document.querySelector('#Stop').addEventListener('click',StopChangingColor)