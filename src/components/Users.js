import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/action-creators";
import {USERS_URL} from "../redux/types";
import {Loading} from "./Loading";

export const Users = () => {
    const users = useSelector(({values}) => values);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(dispatch, USERS_URL)
    }, [])

    return(
        <div>
            <Loading/>

            {users.map(el => <div key={el.id}>
                <h3>name: {el.name}</h3>
                <h3>username: {el.username}</h3>
                <hr/>
            </div>)}
        </div>
    )
}