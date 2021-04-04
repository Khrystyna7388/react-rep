import React, {useState, useEffect} from "react";
import * as url from "url";

export const Posts = () => {
    const _url = 'https://jsonplaceholder.typicode.com/posts/'
    const [counter, setCounter] = useState(1);
    const [post, setPost] = useState(null);
    const [isloading, setIsLoading] = useState(false);

    const intCounter = () => {
        setCounter(counter + 1);
    }

    const fetchPosts = async () => {
        setIsLoading(true);
        const response = await fetch(`${_url}${counter}`);
        const data = await response.json();

       // await setInterval(() => {           ///////////////
            setPost(data);
            setIsLoading(false)
        // }, 2000)
    }

    useEffect(() => {
        fetchPosts();
        return (() => {
            setPost(null);
        })
    }, [counter])


    return (
        <>
            <button onClick={intCounter}>next posts ⟶</button>

            {isloading && (
                <h2>loading</h2>
            )}
            {!!post && (
                <>
                    <hr/>
                    <h3>tittle: {post.title} <br/> id: {post.id}</h3>
                </>
            )}
        </>
    );
}

