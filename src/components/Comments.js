import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/action-creators";
import {COMMENTS_URL} from "../redux/types";
import {Loading} from "./Loading";

export const Comments = () => {
    const comments = useSelector(({values}) => values);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(dispatch, COMMENTS_URL)
    }, [])

    return(
        <div>
            <Loading/>

            {comments.map(el => <div key={el.id}>
                <h3>comment name: {el.name}</h3>
                <h3>comment email: {el.name}</h3>
                <p>comment body: {el.body}</p>
                <hr/>
            </div>)}
        </div>
    )
}