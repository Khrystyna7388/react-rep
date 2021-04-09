import logo from './logo.svg';
import React, {useState, createContext, useContext} from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";

const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    const onTodoCreate = (newTodo) => {
        if (!newTodo || !newTodo.title || !newTodo.description) {
            console.error('wrong arg for new todo');
            return;
        }

        setTodos([newTodo, ...todos]);
    }


    return (
        <TodoContext.Provider value={{
            todos,
            onTodoCreate
        }}>
            {children}
        </TodoContext.Provider>
    )
}

const TodoItem = ({todo}) => {

    return(
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
        </div>
    )
}

const TodosLists = () => {

    const {todos} = useContext(TodoContext);

    return (
        <div>
            {todos.map(el => <TodoItem key={el.title + el.description} todo={el}/>)}
        </div>
    )
}

const AddTodo = () => {
    const [todoValues, setTodoValues] = useState({
        title: '',
        description: ''
    });

    const {onTodoCreate} = useContext(TodoContext);

    const onTodoChange = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value});

    const onCreate = () => {
        onTodoCreate(todoValues);

        setTodoValues({
            title: '',
            description: ''
        })
    }

    return (
        <div>
            <input value={todoValues.title} onChange={onTodoChange} type="text" name="title" placeholder="title"/>
            <br/>
            <br/>
            <input value={todoValues.description} onChange={onTodoChange} type="text" name="description"
                   placeholder="description"/>
            <br/>
            <br/>
            <button onClick={onCreate}>add todo</button>
        </div>
    )
}

const Header = () => {

    return (
        <header>
            <Link to="/">list</Link>
            <Link to="create-todo">add new todo</Link>
        </header>
    )
}

const App = () => {
    return (

        <TodoContextProvider>
            <main>

                <Router>
                    <Header/>

                    <div style={{padding: 20}}>
                        <Switch>
                            <Route path="/" exact>
                                <TodosLists/>
                            </Route>

                            <Route path="/create-todo">
                                <AddTodo/>
                            </Route>
                        </Switch>
                    </div>

                </Router>
            </main>
        </TodoContextProvider>
    );
}

export default App;
