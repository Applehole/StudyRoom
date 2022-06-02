import {createStore} from "redux"

const add =document.querySelector(".add")
const number =document.querySelector(".number")
const minus =document.querySelector(".minus")


const plus = "plus"
const back = "back"

const countModifier = (count = 0 , action) =>{
    switch(action.type){
        case plus :
            return count +1;
        case back :
            return count -1;
        default :
            return count;
    }
}


const countStore = createStore(countModifier)

add.addEventListener("click",()=>{countStore.dispatch({type: plus})})

minus.addEventListener("click",()=>{countStore.dispatch({type: back})})

countStore.subscribe(()=>{number.innerText = countStore.getState()})

number.innerText = countStore.getState()

console.log(countStore)

