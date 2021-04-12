import logo from './logo.svg';
import React, {useEffect, useMemo} from "react";
import './App.css';


//useMemo
//запам'ятовується результат функції(не відбувається ререндер)

const fn = (a, b) => {
    console.log('called')
    return Math.pow(a, b);
}

const App = () => {
    const [counter, setCounter] = React.useState(0);
    const [counter1, setCounter1] = React.useState(2);

    // const complexLogic = fn(4,2);
    //
    // const complexLogic = useMemo(() => {
    //     return fn(4, 2)
    // }, [])
    // console.log('rerender', complexLogic)

    const complexLogic1 = useMemo(() => {
        return fn(4, counter1)
    }, [counter1])

    console.log('logic1', complexLogic1)

    return (
        <div className="App">
            <button onClick={() => setCounter(prev => prev + 1)}>{counter}</button>
            <button onClick={() => setCounter1(prev => prev + 1)}>{counter1}</button>
        </div>
    );
}

export default App;
