import React, {useState, useEffect} from "react";
import './EndpointsDetails.css';
import {
    useParams,
    useHistory
} from 'react-router-dom';

export const AlbumDetails = () => {
    const [album, setAlbum] = useState(null);
    const {id} = useParams();
    const history = useHistory();

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
        const data = await response.json();
        setAlbum(data);
    }

    useEffect(() => {
        fetchData();
    }, [id])

    return (
        <div>
            {album && <div className="card">
                <h2>ALBUM {album.id} DETAILS</h2>
                <h3>album title : {album.title}</h3>
            </div>}

            <div className="button">
                <button onClick={() => {
                    if (id > 1) {
                        history.push(`/albums/${+id - 1}`)
                    }
                }}>← previous comment
                </button>
                <button onClick={() => {
                    if (id < 100) {
                        history.push(`/albums/${+id + 1}`)
                    }
                }}>next album →
                </button>
            </div>
        </div>
    )
}
