import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
    const [list, changeList] = useState([
        {
            id: 1,
            card: 'card1'
        },
        {
            id: 2,
            card: 'card2'
        },
        {
            id: 3,
            card: 'card3'
        }
    ])

    const remove =(itemToRemove) =>{
        if (itemToRemove !== 'first' && itemToRemove!== 'last') return;

        const newList = [...list];
        itemToRemove === 'first' && newList.shift();
        itemToRemove === 'last' && newList.pop();
        changeList(newList);
    }


  return (
    <div className="App">
        <button onClick={() => remove('first')}>remove first</button>
        <button onClick={() => remove('last')}>remove last</button>
        <ul>
            {list.map(el => <li key={el.id}>{el.card}</li>)}
        </ul>
    </div>
  );
}

export default App;
