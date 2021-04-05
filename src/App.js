import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

const App = () => {
    const [counter, setCounter] = useState(1);
    const [value, setValue] = useState(null);
    const firsInput = React.useRef();
    const secondInput = React.useRef();

    const intCounter = () => {
        if (typeof counter === 'number' && counter > 0 && counter <= 100) {
            setCounter(secondInput.current.value);
            console.log(counter);
        }
    }

    const getFetch = async () => {
        // let response;
        // if(secondInput.current.value){
          const response = await fetch(`${firsInput.current.value}/${counter}`);
        // } else {
        //     response = await fetch(`${firsInput.current.value}`);
        // }
        const data = await response.json();
        setValue(data);
    }

    useEffect(() => {
        getFetch();
    }, [counter]);


    return (
        <div className="App">
            <input ref={firsInput} type="text" name="url" placeholder="enter url"/>
            <input ref={secondInput} type="number" name="id" placeholder="enter id"/>
            <button onClick={intCounter}>submit</button>
            {!!value && (
                <h2>{value.title} - {value.body}</h2>
            )}
        </div>
    );
}

export default App;
