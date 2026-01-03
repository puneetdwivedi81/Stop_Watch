
let haurs = 0;
let minute=0;
let second=0;

const dateDisplay=document.querySelector('.date');
let date=new Date();
dateDisplay.innerHTML=date.toDateString();

setInterval( ()=>{
    let date=new Date();
    dateDisplay.innerHTML=date.toDateString();

},1000)


let clock=document.querySelector('#clock');
// console.log(clock);
clock.innerHTML=`${haurs.toString().padStart('2' ,0)}:
${minute.toString().padStart('2' ,0)}:${second.toString().padStart('2' ,0)}`

function watchStop(){
    second++

    if(second>=60){
    minute++;
    second=0;



    
}
 if(minute >= 60){
    haurs++;
    minute=0;
}

clock.innerHTML=`${haurs.toString().padStart('2' ,0)}:
${minute.toString().padStart('2' ,0)}:${second.toString().padStart('2' ,0)}`
// setInterval(watchStop(),1000);



}
// watchStop();

let ref;

let startButton=document.querySelector('.button-section');
let StopButton=document.querySelector('#Stop-Button');
let resetButton=document.querySelector('#reset-button');
// console.log(StopButton)
// console.log(startButton);
startButton.addEventListener('click' ,()=>{
    ref = setInterval(watchStop,1000) 
      
 startButton.disabled=true;
 StopButton.disabled=false;
 resetButton.disabled=false;

})


StopButton.addEventListener('click' ,()=>{

clearInterval(ref);
  
 startButton.disabled=false;
 StopButton.disabled=true;
 resetButton.disabled=false;
})

resetButton.addEventListener('click' ,()=>{
 
    clearInterval(ref);
    second=0;
    minute=0;
    haurs=0;
   clock.innerHTML=`${haurs.toString().padStart('2' ,0)}:
   ${minute.toString().padStart('2' ,0)}:${second.toString().padStart('2' ,0)}`
  
 startButton.disabled=false;
 StopButton.disabled=true;
 resetButton.disabled=true;



    


})

