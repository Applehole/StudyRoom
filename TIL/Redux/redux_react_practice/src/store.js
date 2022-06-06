import {createStore} from "redux"

const ADD ="ADD"
const Minus ="Minus"

export const addTodo = (text) =>{
    return {type: ADD,
    text}
}

export const minusTodo = (id) =>{
    return {
        type: Minus,
        id
    }
}

const reducer = (state=["first"],action) =>{
    switch(action.type){
        case ADD : 
            return [...state,{text:action.text, id: Date.now()}];
        case Minus : 
            return state.filter(ToDo => ToDo !== action.id);
        default : return state
    }
}

const store = createStore(reducer)

export default store