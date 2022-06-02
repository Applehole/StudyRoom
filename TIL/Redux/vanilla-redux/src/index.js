import {createStore} from "redux"

const add =document.querySelector(".add")
const number =document.querySelector(".number")
const minus =document.querySelector(".minus")

const countModifier = (count = 0 , action) =>{
    console.log("action.type",action.type)
    if(action.type==="plus"){
        return count+1
    }
    if(action.type==="minus"){
        return count-1
    }
    return count
}


const countStore = createStore(countModifier)

add.addEventListener("click",()=>{countStore.dispatch({type: "plus"})})

minus.addEventListener("click",()=>{countStore.dispatch({type: "minus"})})

countStore.subscribe(()=>{number.innerText = countStore.getState()})

number.innerText = countStore.getState()

console.log(countStore)

