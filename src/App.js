import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';

function App() {
  const [arr, changeArr] = useState([
    {
      id: 1,
      tittle: 'card1'
    },
    {
      id: 1,
      tittle: 'card2'
    },
    {
      id: 1,
      tittle: 'card3'
    }
  ])
  const [itemsToHide, setItemsToHide] = useState([]);

  const filteredArray = arr.filter(el => !itemsToHide.includes(el.id));

  const removeItems = () => {
    const itemToRemove = filteredArray[0];
    setItemsToHide(...itemsToHide, itemToRemove.id);
  }

  const onRevert = () => {
    setItemsToHide([]);
  }
  return (
    <div className="App">
      <button onClick={removeItems}>remove</button>
      <button onClick={onRevert}>revert</button>
      <ul>
        {filteredArray.map(el => <li key={el.id}>{el.tittle}</li>)}
      </ul>
    </div>
  );
}

export default App;
