import logo from './logo.svg';
import React, {memo, useState} from "react";
import './App.css';

//memo
//поки в компоненті з обгорткою мемо щось не зміниться, доти в паренті вона не перерендиться

const Child = memo(() => {
    const [counter, setCounter] = useState(0);
    const inc = () => {
        setCounter(prev => prev + 1);
    }

    console.log('child rerender')
    return (
        <>
            <h1>child comp</h1>
            <button onClick={inc}>{counter}</button>
        </>
    )
})

const App = () => {
    const [counter, setCounter] = useState(0)

    console.log('rerender')

    return (
        <div className="App">
            <button onClick={() => setCounter(prev => prev + 1)}>{counter}</button>

            <Child/>
        </div>
    );
}

export default App;
