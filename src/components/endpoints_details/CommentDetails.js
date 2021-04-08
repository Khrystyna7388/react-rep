import React, {useState, useEffect} from "react";
import './EndpointsDetails.css';
import {
    useParams,
    useHistory
} from 'react-router-dom';

export const CommentDetails = () => {
    const [comment, setComment] = useState(null);
    const {id} = useParams();
    const history = useHistory();

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
        const data = await response.json();
        setComment(data);
    }

    useEffect(() => {
        fetchData();
    }, [id])


    return (
        <div>
            {comment && <div className="card">
                <h2>COMMENT {comment.id} DETAILS</h2>
                <h2>comment name: {comment.name}</h2>
                <h3>comment email: {comment.email}</h3>
                <p>comment body: {comment.body}</p>
            </div>}

            <div className="button">
                <button onClick={() => {
                    if (id > 1) {
                        history.push(`/comments/${+id - 1}`)
                    }
                }}>← previous comment
                </button>
                <button onClick={() => {
                    if (id < 500) {
                        history.push(`/comments/${+id + 1}`)
                    }
                }}>next comment →
                </button>
            </div>
        </div>
    )
}