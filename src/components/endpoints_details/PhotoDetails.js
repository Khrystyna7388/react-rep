import React, {useState, useEffect} from "react";
import './EndpointsDetails.css';
import {
    useParams,
    useHistory
} from 'react-router-dom';

export const PhotoDetails = () => {
    const [photo, setPhoto] = useState(null);
    const {id} = useParams();
    const history = useHistory();

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        const data = await response.json();
        setPhoto(data);
    }

    useEffect(() => {
        fetchData();
    }, [id])


    return (
        <div>
            {photo && <div className="card">
                <h2>PHOTO {photo.id} DETAILS</h2>
                <h2>photo title: {photo.title}</h2>
                <h3>photo url: {photo.url}</h3>
            </div>}

            <div className="button">
                <button onClick={() => {
                    if (id > 1) {
                        history.push(`/photos/${+id - 1}`)
                    }
                }}>← previous photo
                </button>
                <button onClick={() => {
                    if (id < 5000) {
                        history.push(`/photos/${+id + 1}`)
                    }
                }}>next photo →
                </button>
            </div>

        </div>
    )
}