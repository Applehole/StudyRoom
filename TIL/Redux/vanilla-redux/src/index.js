import {createStore} from "redux"

const form = document.querySelector("form")
const ul = document.querySelector("ul")
const input = document.querySelector("input")

const add_Todo ="add_Todo"
const delete_Todo = "delete_Todo"

const reducer = (state=[],action) =>{
    switch (action.type){
        case add_Todo:
            return [...state, {type : action.text, date : new Date()}];
        case delete_Todo:
            return [];
        default:
            return state;
    }
}

const store = createStore(reducer); 

const addList = () =>{
    let list = store.getState()
    ul.innerHTML = ""
    list.map((el)=>{
        let li = document.createElement("li")
        li.innerText = el.type
        ul.appendChild(li)
    })
}

const onSubmit = (e) =>{
    e.preventDefault();
    const todo = input.value;
    store.dispatch({type: add_Todo, text: todo})
    addList()
}

form.addEventListener("submit",onSubmit)

