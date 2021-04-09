import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

const URL = 'https://jsonplaceholder.typicode.com/todos';

function App() {
    const [counter, setCounter] = useState(1);
    const [todo, setTodo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const incCounter = () => {
        setCounter(counter + 1);
    }

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`${URL}/${counter}`);
        const data = await response.json();

        // setTimeout(() => {
            setTodo(data);
            setIsLoading(false);
        // }, 1000)
    }

    useEffect(() => {
        fetchData()
        return () => {
            setTodo(null);
        }
    }, [counter])

    return (
        <div className="App">
            <h1 onClick={incCounter}>hello</h1>

            {isLoading &&
            (<h1>loading...</h1>
            )}

            {!!todo &&
            <>
                <hr/>
                <h3>{todo.title} -- {todo.completed.toString()} -- {todo.id}</h3>
                <hr/>
            </>
            }
        </div>
    );
}

export default App;
