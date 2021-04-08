import React, {useState,useEffect} from "react";
import './Endpoints.css';
import {Link} from "react-router-dom";

export const Albums = () => {
    const [albums, setAlbums] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        setAlbums(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div>
            {albums.map(album => <div className="list" key={album.id}>
                <Link to={`/albums/${album.id}`}><h1>ALBUM {album.id}</h1></Link>
                <h3>album title : {album.title}</h3>
            </div>)}
        </div>
    )
}