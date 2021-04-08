import React, {useState, useEffect} from "react";
import './Endpoints.css';
import {Link} from "react-router-dom";

export const Photos = () => {
    const [photos, setPhotos] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setPhotos(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div>
            {photos.map(photo => <div className="list" key={photo.id}>
                <Link to={`/photo/${photo.id}`}><h1>PHOTO {photo.id}</h1></Link>
                <h2>photo title: {photo.title}</h2>
                <h3>photo url: {photo.url}</h3>
                <hr/>
            </div>)}
        </div>
    )
}