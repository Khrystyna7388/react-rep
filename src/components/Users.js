import React, {useState, useEffect} from "react";

export const Users = () => {
    const _url = 'https://jsonplaceholder.typicode.com/users/';
    const [counter, setCounter] = useState(1);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const intCounter = () => {
        setCounter(counter + 1);
    }

    const fetchUsers = async () => {
        setIsLoading(true);
        const response = await fetch(`${_url}${counter}`);
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchUsers();
        return (() => {
            setUser(null);
        })
    }, [counter])
    return (
        <div>
            <button onClick={intCounter}>next user ⟶</button>

            {isLoading && (
                <h2>loading...</h2>
            )}

            {!!user && (
                <>
                    <hr/>
                    <h3>name: {user.name} <br/> username: {user.username} <br/>
                        email: {user.email} <br/> address: <br/>
                        street: {user.address.street} <br/> suite: {user.address.suite} <br/>
                        city: {user.address.city}
                    </h3>
                </>
            )}
        </div>
    );
}