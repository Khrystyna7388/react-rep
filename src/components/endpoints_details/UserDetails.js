import React, {useState, useEffect} from "react";
import './EndpointsDetails.css'
import {
    useParams,
    useHistory
} from 'react-router-dom';

export const UserDetails = () => {
    const [user, setUser] = useState(null);
    const {id} = useParams();
    const history = useHistory();

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        fetchData();
    }, [id])

    return (
        <div>
            {
                user && <div className="card">
                    <h2>USER {user.id} DETAILS</h2>
                    <h2>user name: {user.name}</h2>
                    <h2>username: {user.username}</h2>
                    <h3>user email: {user.email}</h3>
                    <p>
                        user address: <br/>
                        street: {user.address.street} <br/>
                        suite: {user.address.suite} <br/>
                        city: {user.address.city} <br/>
                    </p>
                </div>
            }

            <div className="button">
                <button onClick={() => {
                    if (id > 1) {
                        history.push(`/users/${+id - 1}`)
                    }
                }}>← previous user
                </button>
                <button onClick={() => {
                    if (id < 10) {
                        history.push(`/users/${+id + 1}`)
                    }
                }}>next user →
                </button>
            </div>

        </div>
    )
}