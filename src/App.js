import logo from './logo.svg';
import React, {useReducer} from "react";
import './App.css';

const initialState = {
  counter: 0,
  counter1: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC_MY_COOL_COUNTER':
      return {...state, counter: state.counter + 1};
    case 'DEC_MY_COOL_COUNTER':
      return {...state, counter: state.counter - 1};
    default:
      // throw new Error();
          return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({type: 'INC_MY_COOL_COUNTER'})}>inc</button>
      <button onClick={() => dispatch({type: 'DEC_MY_COOL_COUNTER'})}>dec</button>
    </div>
  );
}

export default App;
