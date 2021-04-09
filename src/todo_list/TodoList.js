import React, {useContext} from "react";
import {TodoItem} from "../todo_item/TodoItem";
import {TodoContext} from "../create_context/TodoContext";

export const TodoList = () => {
    const {todos} = useContext(TodoContext);


    return (
        <div>
            {todos.map(el => <TodoItem key={el.title + el.description} todo={el}/>)}

        </div>
    )
}