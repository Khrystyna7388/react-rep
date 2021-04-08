import React, {useState, useEffect} from "react";
import './Endpoints.css';
import {Link} from "react-router-dom";

export const Posts = () => {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {posts.map(post => <div className="list" key={post.id}>
               <Link to={`/posts/${post.id}`}><h1>POST {post.id}</h1></Link>
                <h3>post title: {post.title}</h3>
                <p>posts body: {post.body}</p>
            </div>)}
        </div>
    )
}