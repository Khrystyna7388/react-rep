import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/action-creators";
import {ALBUMS_URL} from "../redux/types";
import {Loading} from "./Loading";

export const Albums = () => {
    const albums = useSelector(({values}) => values);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(dispatch, ALBUMS_URL)
    }, [])

    return(
        <div>
            <Loading/>

            {albums.map(el =>
                <div key={el.id}>
                    <h3>album title: {el.title}</h3>
                    <hr/>
                </div>
            )}
        </div>
    )
}