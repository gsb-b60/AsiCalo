import { exerciseData } from "../exerciseData.js"
import { renderEx } from "./exerciselog.js"
const exerciseList=document.getElementById("exercise-list")
const exitBtn=document.getElementById("exit")
const selectBtn=document.getElementById("select-btn")
const workoutlog=document.querySelector(".workout-log-section")
const exSelect=document.getElementById("exSelectEl")

//exSelect.style.display="none"

const loadExercise=()=>{
    exerciseData.forEach(ex=>{
        const newExHtml=document.createElement('li')
        newExHtml.innerHTML=
        `
        <div class="exercise-div" id='${ex.id}'>
            <hr>
            <h4>${ex.name}</h4>
            <p>${ex.tags}</p>
            <hr>
        </div>
        `
        exerciseList.appendChild(newExHtml)
    })
}

const loadEvent=()=>{
    const exDiv=document.querySelectorAll(".exercise-div")
    exDiv.forEach(ex=>{
        ex.addEventListener("click",()=>{
            //window.location.href=`train.html?id=${ex.id}`
            console.log("xin chao em da chon",ex.id)
            renderEx(ex.id)
            showSection(workoutlog,exSelect)
        })
    })
}
const showSection=(secShow,secHidden)=>{
   secShow.classList.remove('hidden')
   secHidden.classList.add('hidden')
}


selectBtn.addEventListener("click",()=>{
    showSection(exSelect,workoutlog)
})
exitBtn.addEventListener("click",()=>{
    showSection(workoutlog,exSelect)
})
document.addEventListener("DOMContentLoaded",()=>{
    loadExercise()
    loadEvent()
})