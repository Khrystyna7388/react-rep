import React, {useState, useEffect} from "react";

export const Comments = () => {
    const _url = 'https://jsonplaceholder.typicode.com/comments/';
    const [counter, setCounter] = useState(1);
    const [comment, setComment] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const intCounter = () => {
        setCounter(counter + 1);
    }

    const fetchComment = async () => {
        setIsLoading(true);
        const response = await fetch(`${_url}${counter}`);
        const data = await response.json();
        setComment(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchComment();
        return(() => {
            setComment(null);
        })
    }, [counter])

    return (
        <div>
            <button onClick={intCounter}>next comment ⟶</button>

            {isLoading && (
            <h2>loading...</h2>
            )}

            {!!comment && (
            <>
                <hr/>
                <h3>name: {comment.name} <br/> email: {comment.email} <br/> body: {comment.body}</h3>
            </>)}
        </div>
    );
}

