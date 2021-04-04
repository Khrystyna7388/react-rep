import React, {useState, useEffect} from "react";

export const Albums = () => {
    const _url = 'https://jsonplaceholder.typicode.com/albums/';
    const [counter, setCounter] = useState(1);
    const [album, setAlbums] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const intCounter = () => {
        setCounter(counter + 1);
    }

    const fetchAlbums = async () => {
        setIsLoading(true);
        const response = await fetch(`${_url}${counter}`)
        const data = await response.json();
        setAlbums(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchAlbums();
        return (() => {
            setAlbums(null);
        })
    }, [counter])

    return (
        <div>
            <button onClick={intCounter}>next album ⟶</button>

            {isLoading && (
                <h2>loading...</h2>
            )}

            {!!album && (
                <>
                    <hr/>
                <h3>title: {album.title}</h3>
                </>
            )}
        </div>
    );
}