import React, {useContext, useEffect} from "react";
import {JsonPlaceholderContext} from "../context";
import {COMMENTS_URL} from "../constatns";
import {Loading} from "./return/Loading";

export const Comments = () => {
    const {fetchData, values} = useContext(JsonPlaceholderContext);

    useEffect(() => {
        fetchData(COMMENTS_URL);
    }, [])

    return(
        <div>
           <Loading/>
            {values.map(el => <div key={el.id}>
                <h3>comment name: {el.name}</h3>
                <h3>comment email: {el.name}</h3>
                <p>comment body: {el.body}</p>
                <hr/>
            </div>)}
        </div>
    )
}