import './Header.css';
import {ALT_BASKET, ALT_LIKE, URL_BASKET, URL_LIKE} from "../types";
import {LikeIcon} from "./icons/LikeIcon";
import {BasketIcon} from "./icons/BasketIcon";


export const Header = () => {

    return(
        <header>
            <div className="header-icons">
            <LikeIcon/>
            <BasketIcon/>
            </div>
        </header>
    )
}