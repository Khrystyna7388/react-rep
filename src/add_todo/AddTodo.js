import React, {useState, useContext} from "react";
import {TodoContext} from '../create_context/TodoContext';

export const AddTodo = () => {
    const [inputTodos, setInputTodos] = useState({
        title: '',
        description: ''
    })

    const inputsOnChange = ({target: {name, value}}) => setInputTodos({...inputTodos, [name]: value});

    const {onTodoCreate} = useContext(TodoContext);

    const onTodoAdd = () => {
        onTodoCreate(inputTodos);

        setInputTodos({
            title: '',
            description: ''
        })
    }

    return(
        <div>
            <input value={inputTodos.title} onChange={inputsOnChange} type="text" name="title" placeholder="enter title"/>
            <input value={inputTodos.description} onChange={inputsOnChange} type="text" name="description" placeholder="enter description"/>

            <button onClick={onTodoAdd}>add todo</button>
        </div>
    )
}