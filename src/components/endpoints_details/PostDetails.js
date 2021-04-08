import React, {useState, useEffect} from "react";
import './EndpointsDetails.css';
import {
    useParams,
    useHistory
} from 'react-router-dom';

export const PostDetails = () => {
    const [post, setPost] = useState(null);
    const {id} = useParams();
    const history = useHistory();

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
    }

    useEffect(() => {
        fetchData();
    }, [id])

    return (
        <div>
            {post && <div className="card">
                <h2>POST {post.id} DETAILS</h2>
                <h3>post title: {post.title}</h3>
                <p>posts body: {post.body}</p>
            </div>}

            <div className="button">
                <button onClick={() => {
                    if (id > 1) {
                        history.push(`/posts/${+id - 1}`)
                    }
                }}>← previous post
                </button>
                <button onClick={() => {
                    if (id < 100) {
                        history.push(`/posts/${+id + 1}`)
                    }
                }}>next post →
                </button>
            </div>
        </div>
    )
}