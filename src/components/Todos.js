import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/action-creators";
import {TODOS_URL} from "../redux/types";
import {Loading} from "./Loading";

export const Todos = () => {
    const todos = useSelector(({values}) => values);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(dispatch, TODOS_URL)
    }, [])

    return(
        <div>
            <Loading/>

            {todos.map(el => <div key={el.id}>
                <h3>todo title: {el.title}</h3>
                <hr/>
            </div>)}
        </div>
    )
}