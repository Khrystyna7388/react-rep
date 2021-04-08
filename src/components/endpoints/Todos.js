import React, {useState, useEffect} from "react";
import './Endpoints.css';
import {Link} from "react-router-dom";

export const Todos = () => {
    const [todos, setTodos] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTodos(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div>
            {todos.map(todo => <div className="list" key={todo.id}>
                <Link to={`/todos/${todo.id}`}><h1>TODO {todo.id}</h1></Link>
                <h3>todo title: {todo.title}</h3>
                <h3>is todo completed: {todo.completed.toString()}</h3>
                <hr/>
            </div>)}
        </div>
    )
}