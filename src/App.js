import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import {ContextProvider} from "./context/ContextProvider";
import {Posts} from "./components/Posts";
import {Comments} from "./components/Comments";
import {Albums} from "./components/Albums";
import {Photos} from "./components/Photos";
import {Todos} from "./components/Todos";
import {Users} from "./components/Users";
import {
    POSTSLIST,
    COMMENTSLIST,
    ALBUMSLIST,
    PHOTOSLIST,
    TODOSLIST,
    USERSLIST
} from "./constatns";
import {Header} from "./components/header/Header";

const App = () => {
  return (
    <ContextProvider>
        <Router>
            <Header/>
            <Switch>
                <Route path={POSTSLIST}>
                    <Posts/>
                </Route>

                <Route path={COMMENTSLIST}>
                    <Comments/>
                </Route>

                <Route path={ALBUMSLIST}>
                    <Albums/>
                </Route>

                <Route path={PHOTOSLIST}>
                    <Photos/>
                </Route>

                <Route path={TODOSLIST}>
                    <Todos/>
                </Route>

                <Route path={USERSLIST}>
                    <Users/>
                </Route>
            </Switch>

        </Router>
    </ContextProvider>
  );
}

export default App;
