import {createStore} from "redux"

const add =document.querySelector(".add")
const number =document.querySelector(".number")
const minus =document.querySelector(".minus")

let counter = 0;

number.innerText =counter

function TextUpdate (){
    number.innerText =counter
}

function handleAdd(){
    console.log("add")
    counter++
    console.log(counter)
    TextUpdate()
}

function handleMinus(){
    console.log("minus")
    counter--
    console.log(counter)
    TextUpdate()
}

add.addEventListener("click", handleAdd)
minus.addEventListener("click",handleMinus)

