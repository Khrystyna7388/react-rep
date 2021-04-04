import logo from './logo.svg';
import React from "react";
import './App.css';
import {Posts} from "./components/Posts";
import {Comments} from "./components/Comments";
import {Albums} from "./components/Albums";
import {Photos} from "./components/Photos";
import {Todos} from "./components/Todos";
import {Users} from "./components/Users";

const App = () => {
    return (
        <div>
            <Posts/>
            <br/>
            <br/>
            <Comments/>
            <br/>
            <br/>
            <Albums/>
            <br/>
            <br/>
            <Photos/>
            <br/>
            <br/>
            <Todos/>
            <br/>
            <br/>
            <Users/>
        </div>
    );
}

export default App;
