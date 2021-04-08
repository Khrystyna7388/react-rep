import logo from './logo.svg';
import React, {useState, createContext, useContext} from 'react';
import './App.css';

const CounterContext = createContext();

const ContextProvider = ({children}) => {
    const [counter, setCounter] = useState(0);

    const incCounter = () => {
        setCounter(counter + 1);
    }

    const decCounter = () => {
        setCounter(counter - 1);
    }

    return (
        <CounterContext.Provider value={{
            counter,
            incCounter,
            decCounter
        }}>
            {children}
        </CounterContext.Provider>
    )
}

const Counter = () => {
    const {counter, incCounter, decCounter} = useContext(CounterContext);

    return (
        <>
            <h2>Counter: {counter}</h2>
            <button onClick={incCounter}>inc</button>
            <button onClick={decCounter}>dec</button>
        </>
    )
}

const Header = () => {
    const {counter} = useContext(CounterContext);

    return (
        <h1>Header counter: {counter}</h1>
    )
}

const App = () => {
    return (
        <ContextProvider>
            <Header/>
            <Counter/>
        </ContextProvider>

    );
}

export default App;
