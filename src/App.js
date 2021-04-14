import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {
    POSTSLIST,
    COMMENTSLIST,
    ALBUMSLIST,
    PHOTOSLIST,
    TODOSLIST,
    USERSLIST
} from "./redux/types";
import {
    Posts,
    Comments,
    Albums,
    Photos,
    Todos,
    Users
} from "./components";
import {Header} from "./components/header/Header";

const App = () => {
  return (
      <Router>

          <Header/>
          <Switch>
              <Route path={POSTSLIST} component={Posts}/>
              <Route path={COMMENTSLIST} component={Comments}/>
              <Route path={ALBUMSLIST} component={Albums}/>
              <Route path={PHOTOSLIST} component={Photos}/>
              <Route path={TODOSLIST} component={Todos}/>
              <Route path={USERSLIST} component={Users}/>
          </Switch>

      </Router>

  );
}

export default App;
