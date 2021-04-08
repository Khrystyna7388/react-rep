import React, {useState, useEffect} from "react";
import './EndpointsDetails.css';
import {
    useParams,
    useHistory
} from 'react-router-dom';

export const TodoDetails = () => {
    const [todo, setTodo] = useState(null);
    const {id} = useParams();
    const history = useHistory();

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        setTodo(data);
    }

    useEffect(() => {
        fetchData();
    }, [id])

    return (
        <div>
            {
                todo && <div className="card">
                    <h2>TODO {todo.id} DETAILS</h2>
                    <h3>todo title: {todo.title}</h3>
                    {/*<h3>is todo completed: {todo.completed.toString()}</h3>*/}
                </div>
            }

            <div className="button">
                <button onClick={() => {
                    if (id > 1) {
                        history.push(`/todos/${+id - 1}`)
                    }
                }}>← previous todo
                </button>
                <button onClick={() => {
                    if (id < 200) {
                        history.push(`/todos/${+id + 1}`)
                    }
                }}>next todo →
                </button>
            </div>

        </div>
    )
}