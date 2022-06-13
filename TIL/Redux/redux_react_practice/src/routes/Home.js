import React, {useState} from "react"
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store";

function Home (){
    const [text,setText] =useState("")
    const Array =useSelector((state)=>state)
    const dispatch = useDispatch();

    console.log(Array)

    function onChange (e){
        console.log(e.target.value)
        setText(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault();
        console.log(text)
        dispatch({type: 'ADD', text})
        setText("")
    }

    return (
        <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}></input>
            <button>ADD</button>
        </form>
        {Array.map((el)=><ul>{el.text}</ul>)}
        </>
    )
}

export default Home