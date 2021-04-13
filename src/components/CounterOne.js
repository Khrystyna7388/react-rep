import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    incAction,
    incCustomAction,
    decAction,
    resetAction
} from "../redux/action-creators/first-action-creator";


export const CounterOne = () => {
    const {counter1} = useSelector(({counter1}) => ({
        counter1: counter1.counter
    }))
    //
    // const counter1 = useSelector(({counter1: {counter}}) => {
    //     return counter;
    // })

    const dispatch = useDispatch();

    return(
        <div>
            <h1>{counter1}</h1>
            <button onClick={() => dispatch(incAction())}>first inc</button>
            <button onClick={() => dispatch(incCustomAction(45))}>first custom inc</button>
            <button onClick={() => dispatch(decAction())}>first dec</button>
            <button onClick={() => dispatch(resetAction())}>first reset</button>
        </div>
    )
}