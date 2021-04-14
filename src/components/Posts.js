import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/action-creators";
import {POSTS_URL} from "../redux/types";
import {Loading} from "./Loading";

export const Posts = () => {
    const posts = useSelector(({values}) => values);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(dispatch, POSTS_URL);
    }, [])

    return(
        <div>
            <Loading/>

            {posts.map(el => <div key={el.id}>
                <h3>post title: {el.title}</h3>
                <p>post body: {el.body}</p>
                <hr/>
            </div>)}
        </div>
    )
}