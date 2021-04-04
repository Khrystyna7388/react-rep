import React, {useState, useEffect} from "react";

export const Todos = () => {
    const _url = 'https://jsonplaceholder.typicode.com/todos/';
    const [counter, setCounter] = useState(1);
    const [todo, setTodo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const intCounter = () => {
        setCounter(counter + 1);
    }

    const fetchTodos = async () => {
        setIsLoading(true);
        const response = await fetch(`${_url}${counter}`)
        const data = await response.json();
        setTodo(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchTodos()
        return(() => {
            setTodo(null);
        })
    }, [counter])

    return (
        <div>
            <button onClick={intCounter}>next todo ⟶</button>

            {isLoading &&
            <h2>loading...</h2>}

            {!!todo && (
                <>
                    <hr/>
                    <h3>tittle: {todo.title} <br/> completed: {todo.completed.toString()}</h3>
                </>
            )
            }
        </div>
    );
}