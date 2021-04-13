import React, {useEffect, useContext} from "react";
import {JsonPlaceholderContext} from "../context";
import {Loading} from "./return/Loading";
import {PHOTOS_URL} from "../constatns";

export const Photos = () => {
    const {fetchData, values} = useContext(JsonPlaceholderContext);

    useEffect(() => {
        fetchData(PHOTOS_URL)
    })

    return(
        <div>
            <Loading/>
            {values.map(el => <div key={el.id}>
                <h3>photo title: {el.title}</h3>
                <p>photo url: {el.url}</p>
                <hr/>
            </div>)}
        </div>
    )
}