import React, {useContext, useEffect} from "react";
import {JsonPlaceholderContext} from "../context";
import {POSTS_URL} from "../constatns";
import {Loading} from "./return/Loading";

export const Posts = () => {
    const {fetchData, values} = useContext(JsonPlaceholderContext);

    useEffect(() => {
        fetchData(POSTS_URL)
    }, [])

    return(
        <div>
            <Loading/>
            {values.map(el => <div key={el.id}>
                <h3>post title: {el.title}</h3>
                <p>post body: {el.body}</p>
                <hr/>
            </div>)}
        </div>
    )
}