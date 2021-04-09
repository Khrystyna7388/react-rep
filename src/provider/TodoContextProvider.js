import React, {useState} from "react";
import {TodoContext} from "../create_context/TodoContext";

export const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    const onTodoCreate = (newTodo) => {
        if(!todos && !todos.title && !todos.description) return;
        setTodos([newTodo, ...todos]);
    }


    return(
        <TodoContext.Provider value={{
            todos,
            onTodoCreate
        }}>
            {children}
        </TodoContext.Provider>
    )
}
