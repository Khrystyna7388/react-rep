import {useSelector} from "react-redux";

export const Loading = () => {

    const isLoading = useSelector(({isLoading}) => isLoading);

    return(
        <div>
            {isLoading && (
                <h2>loading...</h2>
            )}
        </div>
    )
}