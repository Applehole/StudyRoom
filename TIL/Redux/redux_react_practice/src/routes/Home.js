import React, {useState} from "react"
import { connect } from "react-redux";
import { addTodo } from "../store";

function Home ({toDos ,dispatch}){
    const [text,setText] =useState("")

    function onChange (e){
        console.log(e.target.value)
        setText(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault();
        console.log(text)
        dispatch(addTodo(text))
        setText("")
    }

    return (
        <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}></input>
            <button>ADD</button>
        </form>
        <ul>{toDos}</ul>
        </>
    )
}

function mapStateToProps(state){
    return {toDos : state}
}

function mapDispatchToProps(dispatch){
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)