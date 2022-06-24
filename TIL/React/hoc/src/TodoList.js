import React from "react";
import Hoc from "./HOC";

const TodoList = ({data}) => {
    let renderTodos = data.map((todo)=>{
        return(
            <div key={todo.userId}>
                <p>
                    <strong>{todo.title}</strong>
                </p>
            </div>
        )
    })

    return (
        <div>
            <div>{renderTodos}</div>
        </div>
    )
};

const SearchTodos = Hoc(TodoList,"todos")

export default SearchTodos;