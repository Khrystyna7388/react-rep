import './Header.css';
import {Link} from "react-router-dom";
import {
    POSTSLIST, USERSLIST,
    TODOSLIST, PHOTOSLIST,
    ALBUMSLIST, COMMENTSLIST
} from "../../redux/types";

export const Header = () => {
    return (
        <header>
            <Link to={POSTSLIST}>POSTS</Link>
            <Link to={COMMENTSLIST}>COMMENTS</Link>
            <Link to={ALBUMSLIST}>ALBUMS</Link>
            <Link to={PHOTOSLIST}>PHOTOS</Link>
            <Link to={TODOSLIST}>TODOS</Link>
            <Link to={USERSLIST}>USERS</Link>
        </header>
    )
}