import React, {useState, useEffect} from "react";

export const Photos = () => {
    const _url = 'https://jsonplaceholder.typicode.com/photos/';
    const [counter, setCounter] = useState(1);
    const [photo, setPhoto] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const intCounter = () => {
        setCounter(counter + 1);
    }

    const fetchPhotos = async () => {
        setIsLoading(true);
        const response = await fetch(`${_url}${counter}`);
        const data = await response.json();
        setPhoto(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchPhotos();
        return(() => {
            setPhoto(null);
        })
    }, [counter])
    return (
        <div>
            <button onClick={intCounter}>next photo ⟶</button>

            {isLoading && (
                <h2>loading...</h2>
            )}

            {!!photo && (
                <>
                    <hr/>
                    <h3>title: {photo.title} <br/> url: {photo.url} <br/> thumbnailUrl: {photo.thumbnailUrl}</h3>
                </>
            )}
        </div>
    );
}