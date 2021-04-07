import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const AVAILABLE_RESOURCES =
    [
        'posts',
        'comments',
        'albums',
        'photos',
        'todos',
        'users'
    ]

const App = () => {
    // const [endpoint, setEndpoint] = useState('');
    // const [id, setId] = useState('');

    const [endpointFields, setEndpointFields] = useState({
        endpoint: '',
        id: '',
    });

    const {endpoint, id} = endpointFields;

    const [errorMessage, setErrorMessage] = useState('');

    const [items, setItems] = useState([]);
    const [singleItem, setSingleItem] = useState(null);

    const validateEndpoint = () => {
        if (!endpoint) {
            setErrorMessage('you should enter smth');
            return  false;
        } else if (!AVAILABLE_RESOURCES.includes(endpoint.trim().toLowerCase())) {
            setErrorMessage('wrong endpoint');
            return  false;
        }
        return true;
    }

    const validateId = () => {
        const idToNum = Number(id);
        if (!idToNum && id !== '' && idToNum !== 0) {
             setErrorMessage('valid second input');
            return  false;
        } else  if ((idToNum < 1 || idToNum > 100) && id !== '') {
             setErrorMessage('value is out of range');
             return  false;
        }
        return true;
    }

    const resetError = () => setErrorMessage('');

    const onSubmit = () => {

        const isEndpointValid = validateEndpoint();
        const isIdOk = validateId();

        if(isEndpointValid && isIdOk){
            fetchData();
            resetError();
        }
    }


    const fetchData = async () => {
        const response = await fetch(`${BASE_URL}/${endpoint.trim().toLowerCase()}/${id.trim()}`);
        const json = await response.json();
        // console.log(json);
        if (id) {
            setSingleItem(json);
            setItems([]);
            return;
        }
        setItems(json);
        setSingleItem(null);
    }

    const onFieldUpdate = ({target: {name, value}}) => setEndpointFields({...endpointFields, [name]: value})

    return (
        <div className="App">
            <input value={endpoint} onChange={onFieldUpdate} name="endpoint" type="text"
                   placeholder="enter necessary name of list"/>
            <br/>
            <br/>
            <input value={id} onChange={onFieldUpdate} name="id" type="text" placeholder="enter id"/>
            <br/>
            <br/>
            <button onClick={onSubmit}>fetch data</button>

            <h1 style={{color: 'red'}}>{errorMessage}</h1>

            <hr/>

            <div style={{width: '400px', textAlign: 'left', padding: '20px'}}>
                <pre style={{whiteSpace: 'pre-wrap'}}>
                {singleItem &&
                JSON.stringify(singleItem, null, 2)}
                </pre>
            </div>

            <div>
                {items.map(item => (<h3>{item.id} ---- {item.title}</h3>))}
            </div>
        </div>
    )
}

export default App;
