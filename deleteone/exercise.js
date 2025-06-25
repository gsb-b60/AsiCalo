//decleare variable 
const exerciseList=document.getElementById("exercise-list")
import { exerciseData } from "../exerciseData.js"




document.addEventListener("DOMContentLoaded",()=>{
    loadExercise()
    loadEvent()
})



const loadExercise=()=>{
    exerciseData.forEach(ex=>{
        console.log(ex.name)
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
            // window.location.href=`train.html?id=${ex.id}`
            console.log(ex.id)
        })
    })
}