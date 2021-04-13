import React, {useContext, useEffect} from "react";
import {JsonPlaceholderContext} from "../context";
import {ALBUMS_URL} from "../constatns";
import {Loading} from "./return/Loading";

export const Albums = () => {
    const {fetchData, values} = useContext(JsonPlaceholderContext);

    useEffect(() => {
        fetchData(ALBUMS_URL);
    }, [])

    return(
        <div>
           <Loading/>
            {values.map(el =>
                <div key={el.id}>
                <h3>album title: {el.title}</h3>
                    <hr/>
                </div>
            )}
        </div>
    )
}