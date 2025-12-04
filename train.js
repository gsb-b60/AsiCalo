
// timer unit display variable
var hour=document.getElementById("hour")
var min=document.getElementById("min")
var sec=document.getElementById("sec")
// timer control variable
var ins=document.getElementById('in');
var de=document.getElementById('de');

var start=document.getElementById('start')
var pause=document.getElementById('pause')


const timerControl=document.getElementById("timer-control")

// timer control function

// clocking running------------------------------------------------------------
//the id variable for the clear interval to stop the clock
let timerInterval;
//the clock using the Date.time() when you log a minutes and click the star button
//it will translate the minute to ms unit similar with Date.time() for calculating
//the idea is calculate the duration then the duration +datetime we will have end time and remaining time= endtime- date time
// so the remaining time is the main variable for the timer when the remaining time got to 0 the clock will stop and alert the user
// a important idea is to pause the timer
let endtime;
//the remaining
var remaining;

//  minute update it can use to end the clock or expand the timer!!!!


//main function calculate the remaining and display the min,sec and stop it when hit 0
const CountDownClock=()=>{
    remaining=endtime-Date.now();
    min.innerHTML=String(Math.floor(remaining/60000)).padStart(2,'0');
    sec.innerHTML=String(Math.floor((remaining%60000)/1000)).padStart(2,'0');
    if(remaining<=0){
        clearInterval(timerInterval)
        alert("Het gio nghi!");
        min.innerHTML='00';
        sec.innerHTML='00';
        // for remaining to be nan so the pause funtion would work
        //go to the start timer we will have endtime =(remaining||duration)+Date.now();
        //that be cause when we pause the timer we will use the remaining for counting not the duration 
        //and if we start again we will need to use the duration so put the remain in nan for the use of duration
        remaining=NaN
    }
}
const StartTimer=()=>{
    let duration=parseInt(min.innerText)*60*1000+1000
    //important factore
    endtime =(remaining||duration)+Date.now();   
    // need to clear the inter val before run to clear all the running clock 
    clearInterval(timerInterval)
    timerInterval=setInterval(CountDownClock,1000);
}

const updateMin=(num)=>{
    min.innerHTML=String(parseInt(min.innerText)+num).padStart(2,'0');
}
const updateEndTime=(num)=>{
    if(remaining)
    {
        endtime=endtime+(num*(60*1000))
    }
    
}
const updateTime=(num)=>{
    const currentMin=parseInt(min.innerText)
    if(num<0)
    {
        if(!remaining&&(currentMin+num)>=0)
        { 
            updateMin(num)
        }else if(remaining){
            updateEndTime(num)
        }
    }
    else{//increase the time
        if(!remaining)
        {
            updateMin(num)
        }
        updateEndTime(num)
    }
    
}

// use for start button
start.addEventListener('click',StartTimer);
//use for pause button
pause.addEventListener('click',()=>{
    clearInterval(timerInterval);
})

// ins.addEventListener('click',()=>{
//     // if the clock still moving add time to the end time
//     updateInsTime(1)
// })
// de.addEventListener('click',()=>{
//     updateDesTime(-1)
// })

timerControl.addEventListener("click",(e)=>{
    const action=e.target.dataset.action
    switch (action)
    {
        case "+3":
            updateTime(3)
            break;
        case "-3":
            updateTime(-3)
            break;
        case "ins":
            updateTime(1)
            break;
        case "des":
            updateTime(-1)
    }
})