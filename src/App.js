import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import './App.css';

// useState callback style
// якщо нове значення стейту похідне від попереднього значення(щоб позбутись асинхронності)


const App = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    // setCounter(counter + 1);
    setCounter(prev => prev + 1)
  }

  // useEffect(() => {
  //   console.log(counter)
  // }, [counter])

  return (
    <div className="App">
      <button onClick={inc}>{counter}</button>
    </div>
  );
}

export default App;
