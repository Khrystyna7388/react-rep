import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "./redux/action-creators";

const App = () => {
  const todos = useSelector(({todos}) => todos);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchTodos(dispatch);
  }, [dispatch])

  // const fetchTodos = async () => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     const data = await response.json();
  //     dispatch(setTodos(data));
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  return (
    <div className="App">

      {todos.map(el => <>
        <h3>{el.id} -- {el.title}</h3>
      </>)}

    </div>
  );
}

export default App;
