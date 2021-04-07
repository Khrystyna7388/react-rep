import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const _url = 'https://jsonplaceholder.typicode.com';

const ENDPOINTS =
    [
        'posts',
        'comments',
        'albums',
        'photos',
        'todos',
        'users',
    ]

const App = () => {

    const endpoint = React.useRef();
    const id = React.useRef();

    const [errorMessage, setErrorMessage] = useState('');

    const [items, setItems] = useState([]);
    const [singleItem, setSingleItem] = useState(null);

    const isValidEndpoint = () => {
        if(!endpoint.current.value){
            setErrorMessage('enter smth');
            return false;
        } else if(!ENDPOINTS.includes(endpoint.current.value.trim().toLowerCase())){
            setErrorMessage('wrong value');
            return false;
        }
        return true;
    }

    const isValidId = () => {
        const idToNum = Number(id.current.value);
        if((!idToNum && id.current.value !== 0 && id.current.value !== '')){
            setErrorMessage('invalid value');
            return false;
        } else if((idToNum < 1 || idToNum > 100) && id.current.value !== ''){
            setErrorMessage('out of range');
            return false;
        }
        return true;
    }

    const resetError = () => setErrorMessage('');

    const onSubmit = () => {
        const validEndpoint = isValidEndpoint();
        const validId = isValidId();
        if(validEndpoint && validId){
            getFetch();
            resetError();
        }
    }

    const getFetch = async () => {
        const response = await fetch(`${_url}/${endpoint.current.value.trim().toLowerCase()}/${id.current.value.trim()}`);
        const data = await response.json();
        if (id.current.value) {
            setSingleItem(data);
            setItems([]);
            return;
        }
        setItems(data);
        setSingleItem(null);
    }

    return (
        <div className="App">
            <input ref={endpoint} type="text" name="url" placeholder="enter url"/>
            <input ref={id} type="number" name="id" placeholder="enter id"/>
            <button onClick={onSubmit}>submit</button>

            <h1 style={{background: 'black', color: 'red'}}>{errorMessage}</h1>

            {singleItem && <p style={{color: 'red'}}>{JSON.stringify(singleItem, null, 2)}</p>}

            {items.map(item => <h3 key={item.id}>{item.id} --- {item.title}</h3>)}
        </div>
    );
}

export default App;
