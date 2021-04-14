import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/action-creators";
import {PHOTOS_URL} from "../redux/types";
import {Loading} from "./Loading";

export const Photos = () => {
    const photos = useSelector(({values}) => values);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(dispatch, PHOTOS_URL)
    }, [])

    return(
        <div>
            <Loading/>

            {photos.map(el => <div key={el.id}>
                <h3>photo title: {el.title}</h3>
                <p>photo url: {el.url}</p>
                <hr/>
            </div>)}
        </div>
    )
}