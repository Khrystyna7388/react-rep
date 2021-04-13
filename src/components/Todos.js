import React, {useEffect, useContext} from "react";
import {JsonPlaceholderContext} from "../context";
import {TODOS_URL} from "../constatns";
import {Loading} from "./return/Loading";

export const Todos = () => {
    const {fetchData, values} = useContext(JsonPlaceholderContext);

    useEffect(() => {
        fetchData(TODOS_URL)
    }, [])

    return(
        <div>
            <Loading/>
            {values.map(el => <div key={el.id}>
                <h3>todo title: {el.title}</h3>
                <hr/>
            </div>)}
        </div>
    )
}