import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

let interval;
const Comp = () => {

    // useEffect(() => {
    //   console.log('did mount child')
    // }, [])

    useEffect(() => {
        interval = setInterval(() => {
            console.log('fetching data')
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <h1>child</h1>
    )
}

const App = () => {
    const [counter, setCounter] = useState(0);

    const incCounter = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {
        console.log('did mount parent')
    }, [])

    useEffect(() => {
        console.log('did update parent')

        return () => console.log('will unmount parent')
    }, [counter])

    return (
        <div className="App">
            <h1 onClick={incCounter}>hello {counter}</h1>
            {!!(counter % 2) && <Comp/>}
        </div>
    );
}

export default App;
