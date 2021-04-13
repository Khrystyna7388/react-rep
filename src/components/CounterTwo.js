import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    incActionTwo,
    incCustomActionTwo,
    decActionTwo,
    resetActionTwo
} from "../redux/action-creators/second-action-creator";

export const CounterTwo = () => {
    const counter2 = useSelector(({counter2: {counter}}) => {
        return counter
    })

    const dispatch = useDispatch();

    return(
        <>
            <h1>{counter2}</h1>
            <button onClick={() => dispatch(incActionTwo())}>second inc</button>
            <button onClick={() => dispatch(incCustomActionTwo(76))}>second custom inc</button>
            <button onClick={() => dispatch(decActionTwo())}>second dec</button>
            <button onClick={() => dispatch(resetActionTwo())}>second reset</button>
        </>
    )
}