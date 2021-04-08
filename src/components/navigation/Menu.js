import React from "react";
import './Menu.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Posts} from "../endpoints/Posts";
import {Comments} from "../endpoints/Comments";
import {Albums} from "../endpoints/Albums";
import {Photos} from "../endpoints/Photos";
import {Todos} from "../endpoints/Todos";
import {Users} from "../endpoints/Users";
import {PostDetails} from "../endpoints_details/PostDetails";
import {CommentDetails} from "../endpoints_details/CommentDetails";
import {AlbumDetails} from "../endpoints_details/AlbumDetails";
import {PhotoDetails} from "../endpoints_details/PhotoDetails";
import {TodoDetails} from "../endpoints_details/TodoDetails";
import {UserDetails} from "../endpoints_details/UserDetails";

export const Menu = () => {
    return(
        <Router>
            <nav className="nav">
                <Link to="/posts"><span>POSTS</span></Link>
                <Link to="/comments"><span>COMMENTS</span></Link>
                <Link to="/albums"><span>ALBUMS</span></Link>
                <Link to="/photos"><span>PHOTOS</span></Link>
                <Link to="/todos"><span>TODOS</span></Link>
                <Link to="/users"><span>USERS</span></Link>
            </nav>

            <Switch>
                <Route path="/posts" exact>
                    <Posts />
                </Route>

                <Route path="/posts/:id">
                    <PostDetails/>
                </Route>

                <Route path="/comments" exact>
                    <Comments/>
                </Route>

                <Route path="/comments/:id">
                    <CommentDetails/>
                </Route>

                <Route path="/albums" exact>
                    <Albums/>
                </Route>

                <Route path="/albums/:id">
                    <AlbumDetails/>
                </Route>

                <Route path="/photos" exact>
                    <Photos/>
                </Route>

                <Route path="/photos/:id">
                    <PhotoDetails/>
                </Route>

                <Route path="/todos" exact>
                    <Todos/>
                </Route>

                <Route path="/todos/:id">
                    <TodoDetails/>
                </Route>

                <Route path="/users" exact>
                    <Users/>
                </Route>

                <Route path="/users/:id">
                    <UserDetails/>
                </Route>

                <Route>PAGE NOT FOUND</Route>

            </Switch>
        </Router>
    )
}