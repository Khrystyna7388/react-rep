import React, {useContext} from "react";
import {JsonPlaceholderContext} from "../../context";

export const Loading = () => {
    const {isLoading} = useContext(JsonPlaceholderContext);

    return(
        <div>
            {isLoading && (
                <h3>loading...</h3>
            )}

        </div>
    )
}