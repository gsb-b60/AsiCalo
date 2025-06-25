import { exerciseData } from "../exerciseData.js";


var workoutlog=document.getElementById("workout-log")
let setlog=document.getElementById('set-list')
const addEx=document.getElementById('add-ex')
//testing object
let testobj=[]



//update from the future

//create a exercise html
//create function for adding exercise
export const renderEx=(id)=>{
    const ex=exerciseData.find(ex=>ex.id==parseInt(id))
    
    const newExDiv=document.createElement('div')
    newExDiv.id=id
    newExDiv.classList.add("ex-log")
    newExDiv.innerHTML=`
        <hr>
        <span id="exercise-name">${ex.name}</span>
        <p>${ex.tags}</p>
        <div class="set-list" id='ex-${ex.id}'>
            <div id="set-div" class="set-log">
                <span>Set</span>
                <span id="set-number">1</span>
                <lable for="weight">Weight</lable>
                <input type="number" min="0" id="weight" value="1" step="10">
                <label for="rep">Reps</label>
                <input type="number" min="0" name="" id="rep" value="1">
                <lable for="rir">Reps In Reserve</lable> 
                <input id="rir" min="0" max="10" type="number" value="1">
                <button class="remove-set-btn" data-action="remove-set">X</button>
                <button data-action="save-set">V</button>
            </div>
        </div>
        <button class="add-set-btn" data-action="add-set">add set</button>
        <button class="remove-exercise-btn" data-action="remove-ex">Remove Exercise</button>
    `
    workoutlog.appendChild(newExDiv)
    // already cover this feature
    // setlog=document.getElementById(`ex-${ex.id}`)
}

const createSetElement=(set,rep,weight,rir,isSaved)=>{
    const newSetDiv=document.createElement('div')
    newSetDiv.classList.add('set-log')
    newSetDiv.innerHTML=`
                    <span>Set</span>
                    <span id="set-number">${set}</span>
                    <lable for="weight">Weight</lable>
                    <input type="number" min="0" id="weight" value="${weight}" step="10">
                    <label for="rep">Reps</label>
                    <input type="number" min="0" name="" id="rep" value="${rep}">
                    <lable for="rir">Reps In Reserve</lable> 
                    <input id="rir" min="0" max="10" type="number" value="${rir}">
                    <button class="remove-set-btn" data-action="remove-set">X</button>
                    <button data-action="save-set">V</button>
                    `
    if(isSaved)
    {   
        newSetDiv.style.backgroundColor="rgba(195, 176, 145, 0.6)"
    }
    return newSetDiv
}

//miss you sooo much
//luv you
//create a funciton for removing the whole exercise
const removeEx=(exRemove)=>{
    try{
        testobj=testobj.filter(ex=>ex.id!==parseInt(exRemove.id,10))
        exRemove.remove()
        saveSession()
    }
    catch(e)
    {
        console.log("catch error",e)
    }
}

//save to the session storage
const saveSession=()=>{
    sessionStorage.setItem("workout-log",JSON.stringify(testobj))
}

//create a function for remove the set from the obj data
const removeSet=(actionItem)=>{
    const setListId=actionItem.closest(".set-list").id
    if(setListId)
    {
        const removeExId=parseInt(setListId.substring(3),10)
        let removeEx=testobj.find(ex=>ex.id==removeExId)
        let removeIdx=removeEx.sets.findIndex(removeSet=>removeSet.set==parseInt(actionItem.querySelector('#set-number').innerHTML,10))
        console.log(parseInt(actionItem.querySelector('#set-number').innerHTML,10))
        removeEx.sets.splice(removeIdx,1)
        actionItem.remove()      
        console.log(testobj)
        //save it in to the session storage  
        sessionStorage.setItem('workout-log',JSON.stringify(testobj))
    }
}



//create pour in varable for making a set element if there are no last set create new without any old measure
const createSetLog=(parentDiv)=>{
    if(parentDiv)
    {
        
        if(parentDiv.querySelector('div:last-of-type')!==null)
        {
            const lastSet=parentDiv.querySelector('div:last-of-type')
            const set=lastSet.querySelector('#set-number').innerHTML||1
            const weight=lastSet.querySelector('#weight').value||1
            const rep=lastSet.querySelector('#rep').value||1
            const rir=lastSet.querySelector('#rir').value||1
            parentDiv.appendChild(createSetElement(parseInt(set)+1,rep,weight,rir))
        }
        else{
            console.log("no last set,create new one")
            parentDiv.appendChild(createSetElement(1,1,1,1))
        }
    }
}


//the workout function need a save feature for unsave workout
//the array save all the unsave exercise
//sessionStorage.setItem('unSaveExercise',JSON.stringify(unsaveArr))
//temp save function
const saveSesssion=(saveSetElement)=>{
    try
    {
        // console.log(unsaveArr)
        // const existingData=sessionStorage.getItem('unSaveExercise')
        // unsaveArr=JSON.parse(existingData)
        // unsaveArr.push(3)
        // sessionStorage.setItem('unSaveExercise',JSON.stringify(unsaveArr))    
        //miss you so much
        //only luv you co thoa
        const addSet={
            set:parseInt(saveSetElement.querySelector("#set-number").innerHTML),
            weight:parseInt(saveSetElement.querySelector('#weight').value),
            reps:parseInt(saveSetElement.querySelector('#rep').value),
            rir:parseInt(saveSetElement.querySelector('#rir').value)
        }
        //learning new book about relationship to do better for you
        
        const closestSetListDiv=saveSetElement.closest(".set-list")
        // turn id like ex-xx to xx for id finding
        if(closestSetListDiv)
        {
            var savedExId=parseInt(closestSetListDiv.id.substring(3),10)
            console.log(savedExId)
        }
        
        const savedEx=exerciseData.find(ex=>ex.id==savedExId)
        //find exercise in the exercise data array for comfirmation
        //if finded
        if(savedEx)
        {
            //find exercise in saved exercise 
            const oldEx=testobj.find(ex=>ex.id===savedExId)
            //if finded 
            if(oldEx)
            {
                //add in to the sets 
                console.log("co bai trong danh sach da luu")
                try{
                    oldEx.sets.push(addSet)
                }
                catch(e){
                    console.log(e)
                }
            }
            else{
                //if not create a exercise object and and new set
                console.log("khong co bai trong danh sach da luu,tao ex moi de luu")
                const newSavedEx={
                    id:savedEx.id,
                    name:savedEx.name,
                    tag:savedEx.tags,
                    sets:[]
                }
                //add new set
                newSavedEx.sets.push(addSet)
                //push to the saved array
                testobj.push(newSavedEx)
            }
            //add xong luu data vao session storage
            sessionStorage.setItem("workout-log",JSON.stringify(testobj))
        }else{
            console.log("ko co bai trong danh sach exdata")
        }
        console.log(testobj)
    }catch(e)
    {
        console.log("co loi trong qua trinh luu",e)
    }
}



//render workout
const renderWorkout=()=>{
    testobj.forEach(ex => {
        renderSavedEx(ex.id,ex) 
        
    });
}


const renderSavedEx=(id,exObj)=>{
    const ex=exerciseData.find(ex=>ex.id==parseInt(id))
    const newExDiv=document.createElement('div')
    newExDiv.classList.add("ex-log")
    newExDiv.id=id
    newExDiv.innerHTML=`
        <hr>
        <span id="exercise-name">${ex.name}</span>
        <p>${ex.tags}</p>
        <div class="set-list" id='ex-${ex.id}'>
        </div>
        <button class="add-set-btn" data-action="add-set">add set</button>
        <button class="remove-exercise-btn" data-action="remove-ex">Remove Exercise</button>
    `
    workoutlog.appendChild(newExDiv)

    //render the saved set
    exObj.sets.forEach(set => {
        newExDiv.querySelector(".set-list").appendChild(createSetElement(set.set,set.reps,set.weight,set.rir,true))
    });
}
//damn minh di xa phet roi
//co gang 1 chut nua thoi
//co gang nhieu chut nua thoiu
//co nhieu nua nha truoc he thanh mvp luon
//dau kho vai 
//1 dem quan quai cua minh 
//yeu la dau the nay sao 
const sortSet=()=>{
    const sortedExs=testobj.map(ex=>{
        const sortedEx={...ex}
        if(sortedEx.sets && Array.isArray(sortedEx.sets))
        {
            sortedEx.sets=[...sortedEx.sets].sort((a,b)=>a.set-b.set)
            return sortedEx
        }
        return sortedEx
    })
    return sortedExs
}



workoutlog.addEventListener("click",(event)=>{
    const target=event.target
    const targetAction=target.dataset.action;

    let actionItem
    switch (targetAction){
        case "add-set":
            let parentExDiv=target.closest('.ex-log')
            let setList=parentExDiv.querySelector('.set-list')
            createSetLog(setList);
            break;
        case "remove-set":
            actionItem=target.closest('.set-log')
            //a function that remove the exercise from the data and remove the html element then update the session storage
            removeSet(actionItem)
            break;
        case "remove-ex":
            actionItem=target.closest('.ex-log')
            removeEx(actionItem)
            //actionItem.remove()
            break;
        case 'save-set':
            actionItem=target.closest('.set-log')
            actionItem.style.backgroundColor="rgba(195, 176, 145, 0.6)"
            saveSesssion(actionItem)
            console.log(actionItem)
            break;
    }
})


document.addEventListener("DOMContentLoaded",()=>{
    // const urlParams=new URLSearchParams(window.location.search)
    // const idEx=urlParams.get("id")
    // if(idEx)
    // {
    //     renderEx(idEx)
    // }
    // addEx.addEventListener("click",()=>{
    //     renderEx(idEx)
    // })
    const arrSess=sessionStorage.getItem("workout-log")
    const theArrSes=JSON.parse(arrSess)||[]
    console.log(theArrSes)
    if(!theArrSes==[])
    {
        testobj=theArrSes
    }   
    console.log(sortSet())
    testobj=sortSet()
    renderWorkout()
})
