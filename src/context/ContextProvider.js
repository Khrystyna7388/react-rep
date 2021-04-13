import React, {useState} from "react";
import {JsonPlaceholderContext} from "./index";

export const ContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState([]);

    const fetchData = async (url) => {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setValues(data);
        setIsLoading(false);
    }


    return(
        <JsonPlaceholderContext.Provider value={{
            isLoading,
            values,
            fetchData
        }}>
            {children}
        </JsonPlaceholderContext.Provider>
    )
}