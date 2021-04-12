import logo from './logo.svg';
import React, {memo, useCallback, useState} from "react";
import './App.css';

//useCallback
//використовувати, коли child обгорунтий в memo і child приймає пропсою якусь функцію

const Child = memo(() => {
  const [counter, setCounter] = useState(0);
  const inc = () => {
    setCounter(prev => prev + 1);
  }

  console.log('child rerender')
  return (
      <>
        <h1>child comp</h1>
        <button onClick={inc}>{counter}</button>
      </>
  )
})

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

      <Child inc={inc}/>
    </div>
  );
}

export default App;
