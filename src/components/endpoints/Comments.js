import React, {useEffect, useState} from "react";
import './Endpoints.css';
import {Link} from "react-router-dom";

export const Comments = () => {
    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        setComments(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div>
            {comments.map(comment =>
                <div className="list" key={comment.id}>
                    <Link to={`/comments/${comment.id}`}><h1>COMMENT {comment.id}</h1></Link>
                    <h2>comment name: {comment.name}</h2>
                    <h3>comment email: {comment.email}</h3>
                    <p>comment body: {comment.body}</p>
                    <hr/>
                </div>
            )}
        </div>
    )
}