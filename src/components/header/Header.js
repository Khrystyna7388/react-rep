import React from 'react';
import {Link} from "react-router-dom";
import {ALBUMSLIST, COMMENTSLIST, PHOTOSLIST, POSTSLIST, TODOSLIST, USERSLIST} from "../../constatns";
import './Header.css';

export const Header = () => {
    return(
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