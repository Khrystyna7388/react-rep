import logo from './logo.svg';
import React, {useCallback, useState} from "react";
import './App.css';

const Child = () => {

}

const App = () => {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(2);

  const inc = useCallback(() => {
    setCounter(prev => prev + 1)
  }, [])

  const inc1 = useCallback(() => {
    setCounter1(prev => prev + 1)
  }, [])

  return (
    <div className="App">
      <button onClick={inc}>{counter}</button>
      <button onClick={inc1}>{counter1}</button>
    </div>
  );
}

export default App;
