import React, {useEffect, useContext} from "react";
import {JsonPlaceholderContext} from "../context";
import {USERS_URL} from "../constatns";
import {Loading} from "./return/Loading";

export const Users = () => {
    const {fetchData, values} = useContext(JsonPlaceholderContext);

    useEffect(() => {
        fetchData(USERS_URL)
    }, [])

    return(
        <div>
            <Loading/>
            {values.map(el => <div key={el.id}>
                <h3>name: {el.name}</h3>
                <h3>username: {el.username}</h3>
                <hr/>
            </div>)}
        </div>
    )
}