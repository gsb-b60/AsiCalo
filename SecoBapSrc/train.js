// timer unit display variable
var hour=document.getElementById("hour")
var min=document.getElementById("min")
var sec=document.getElementById("sec")
// timer control variable
var ins=document.getElementById('in');
var de=document.getElementById('de');

var start=document.getElementById('start');
var pause=document.getElementById('pause')
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

//the logging variable
var workoutlog=document.getElementById("workout-log")
var addSet=document.getElementById("add-set")
//  minute update it can use to end the clock or expand the timer!!!!
ins.addEventListener('click',()=>{
    min.innerHTML=String(parseInt(min.innerText)+1).padStart(2,'0');
    if(remaining)
    {
        endtime=endtime+60*1000
    }
})
de.addEventListener('click',()=>{
    if(min.innerText>0&&!remaining)
    {
        min.innerHTML=String(parseInt(min.innerText)-1).padStart(2,'0');
    }
    if(remaining)
    {
        endtime=endtime-60*1000
    }
})



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
    let duration=parseInt(min.innerText)*60*1000
    //important factore
    endtime =(remaining||duration)+Date.now();   
    // need to clear the inter val before run to clear all the running clock 
    clearInterval(timerInterval)
    timerInterval=setInterval(CountDownClock,1000);
}

// use for start button
start.addEventListener('click',StartTimer);
//use for pause button
pause.addEventListener('click',()=>{
    clearInterval(timerInterval);
})

// create a function for logging exercise per set

const CreateLog=()=>{
    // select all the set-log and use the latest value to create next set
    const allSet=document.getElementsByClassName("set-log");
    const lastSet=allSet[allSet.length-1]
    // get the information about the last set
    const weight=lastSet.querySelector("#weight").value
    const rep=lastSet.querySelector("#rep").value
    const rir=lastSet.querySelector("#rir").value
    const set=allSet.length+1
    console.log(allSet.length)
    console.log(weight,rep,rir)
    // create a new setlog div with the previous data
    workoutlog.innerHTML+=`
                <div class="set-log">
                    <p>set</p>
                    <p id="set-number">${set}</p>
                    <span id="exercise-name">bench press</span>
                    <p>weight</p>
                    <input type="number" min="0" id="weight" value="${weight}">
                    <p>Rep</p>
                    <input type="number" min="0" name="" id="rep" value="${rep}">
                    <p >Rep InReverse </p>
                    <input id="rir" min="0" max="10" type="number" value="${rir}">
                </div>
                    `
}

addSet.addEventListener("click",CreateLog)


//