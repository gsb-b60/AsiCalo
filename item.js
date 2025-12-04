// again use the old data to load the information page
import { foodData } from "./foodData.js"
//the big object for the page
let foodItem
let unitRatio=0.01

//declere variable for listing food marco
const protein=document.getElementById('protein')
const carb=document.getElementById('carb')
const fat=document.getElementById('fat')
const calo=document.getElementById('total-calories')
const foodName=document.getElementById('food-name')

let proteinValue,carbValue,fatValue,caloValue,foodNameValue

//quantity variable for calculating
const quantity=document.getElementById("food-quantity")
const addFood=document.getElementById("add")
const back=document.getElementById("back")
//take the parameter
document.addEventListener("DOMContentLoaded",()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const foodCode=urlParams.get('code');
    //then add the variable for the page
    if(foodCode)
    {
        foodItem=foodData.find(item=>item.code==foodCode)
        loadFoodInfo(foodItem,1)
        console.log(foodItem)
    }
})
// user use different unit
const unit={
  gram:1,
  oz:28.35,
  lb:453.59
}
// different unit have different step 
const unitStep={
  gram:50,
  oz:2,
  lb:1
}

const loadFoodInfo=(foodItem,ratio)=>{
  proteinValue=Math.round(foodItem.protein*ratio);
  carbValue=Math.round(foodItem.carb*ratio);
  fatValue=Math.round(foodItem.fat*ratio);
  foodNameValue=foodItem.name;
  caloValue=Math.round(foodItem.calo*ratio);


  protein.innerText=proteinValue
  carb.innerText=carbValue
  fat.innerText=fatValue
  foodName.innerText=foodNameValue
  calo.innerHTML=caloValue
}
//when a user input the quantity the whole marco change 
quantity.addEventListener("input",()=>{
  unitRatio=unit[document.getElementById('unit').value]/100
  loadFoodInfo(foodItem,quantity.value*unitRatio)
})
const changeStep=()=>{
  const step=unitStep[document.getElementById('unit').value]
  quantity.step=step
  quantity.value=0
  loadFoodInfo(foodItem,0)
}

document.getElementById('unit').addEventListener("change",changeStep)


addFood.addEventListener("click",()=>{
  // create local storage when user hit add food
  window.location.href=`calories.html?unitRatio=${unitRatio.toFixed(3)}&quantity=${quantity.value}&foodCode=${foodItem.code}&calo=${caloValue}`
})
back.addEventListener('click',()=>{
  window.location.href=`calories.html?`
})
