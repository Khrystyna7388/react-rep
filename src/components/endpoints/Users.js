import React, {useState, useEffect} from "react";
import './Endpoints.css';
import {Link} from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div>
            {users.map(user => <div className="list" key={user.id}>
                <Link to={`/users/${user.id}`}><h1>USER {user.id}</h1></Link>
                <h2>user name: {user.name}</h2>
                <h2>username: {user.username}</h2>
                <h3>user email: {user.email}</h3>
                <p>
                    user address: <br/>
                    street: {user.address.street} <br/>
                    suite: {user.address.suite} <br/>
                    city: {user.address.city} <br/>
                </p>
                <hr/>
            </div>)}
        </div>
    )
}