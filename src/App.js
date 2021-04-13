import logo from './logo.svg';
import React from "react";
import './App.css';
import {CounterOne} from "./components/CounterOne";
import {CounterTwo} from "./components/CounterTwo";

const App = () => {


  return (
    <div className="App">
      <CounterOne/>
      <hr/>
      <CounterTwo/>
    </div>
  );
}

export default App;
