import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

const URL = 'https://jsonplaceholder.typicode.com';

const App = () => {
    const [endpoint, setEndpoints] = useState('posts');

    const [item, setItem] = useState(null);

    const fetchData = async () => {
        const response = await fetch(`${URL}/${endpoint}/1`)
        const data = await response.json();
        setItem(data);
    }

    const onSubmit = (e) => {
        fetchData();
        alert(JSON.stringify(item, null, 2));
        e.preventDefault();
    }

    const onChange = (e) => {
        setEndpoints(e.target.value)
    }

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <label>
                    <select onChange={onChange}>
                        <option value={endpoint}>post</option>
                        <option value="comments">comment</option>
                        <option value="albums">album</option>
                        <option value="photos">photo</option>
                        <option value="todos">todoo</option>
                        <option value="users">user</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>

        </div>
    );
}

export default App;
