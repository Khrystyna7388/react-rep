import logo from './logo.svg';
import React from "react";
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {
    incAction,
    decAction,
    resetAction,
    incCustomAction
} from "./redux/action-creators";

const App = () => {
    // const store = useSelector((store) => {
    //   console.log(store)
    //   return store
    // })

    // const counter1 = useSelector(({counter1: {counter}}) => {
    //     return counter
    // })
    //
    // const counter2 = useSelector(({counter2: {counter}}) => {
    //     return counter
    // })

    const {counter1, counter2} = useSelector(({counter1, counter2}) => ({
        counter1: counter1.counter,
        counter2: counter2.counter
    }))

    const dispatch = useDispatch()

    return (
        <div className="App">
            <h1>{counter1}</h1>
            <h2>{counter2} - 2</h2>
            <button onClick={() => dispatch(incCustomAction(102))}>inc custom</button>
            <button onClick={() => dispatch(incAction())}>inc</button>
            <button onClick={() => dispatch(decAction())}>dec</button>
            <button onClick={() => dispatch(resetAction())}>reset</button>
        </div>
    );
}

export default App;
