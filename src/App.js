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
    const [doneTodos, setDoneTodos] = useState([]);

    const onTodoCreate = (newTodo) => {
        if (!newTodo || !newTodo.title || !newTodo.description) {
            console.error('wrong arg for new todo');
            return;
        }
        setTodos([newTodo, ...todos]);
    }

    const onTodoRemove = (todoId) => {
        if (!todoId) {
            console.error('wrong todo id');
            return;
        }
        setTodos(todos.filter(el => el.id !== todoId));
        setDoneTodos(doneTodos.filter(el => el.id !== todoId))
    }

    const isDoneToggle = (todoId) => {
        const isTodoMarkedAsDone = doneTodos.includes(todoId);

        if (isTodoMarkedAsDone) {
            return setDoneTodos(doneTodos.filter(id => id !== todoId));
        }
        setDoneTodos([...doneTodos, todoId])
    }


    return (
        <TodoContext.Provider value={{
            todos,
            onTodoCreate,
            onTodoRemove,
            isDoneToggle,
            doneTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
}

const TodoItem = ({todo, onTodoRemove, isDoneToggle, isDone}) => {
    // const {onTodoRemove} = useContext(TodoContext);

    const onTodoDelete = () => {
        const answer = window.confirm('are you sure you want to delete this todo?');

        if (answer) {
            onTodoRemove(todo.id);
        }
    }

    const onMarkIsDoneToggle = () => isDoneToggle(todo.id);

    return (
        <div>
            <div style={{
                textDecoration: isDone? 'line-through' : ''
            }}>
                <h4>{todo.title}</h4>
                <p>{todo.description}</p>
            </div>

            <button onClick={onTodoDelete}>delete todo</button>
            <button onClick={onMarkIsDoneToggle}>mark as {isDone ? 'active' : 'done'}</button>
        </div>
    )
}

const TodosLists = () => {

    const {
        todos,
        onTodoRemove,
        isDoneToggle,
        doneTodos
    } = useContext(TodoContext);
    console.log(doneTodos);

    return (
        <div>
            {todos.map(el => <TodoItem
                isDone={doneTodos.includes(el.id)}
                isDoneToggle={isDoneToggle}
                onTodoRemove={onTodoRemove}
                key={el.title + el.description} todo={el}/>)}
        </div>
    )
}

const AddTodo = () => {
    const [todoValues, setTodoValues] = useState({
        title: '',
        description: '',
        id: null
    });

    const {onTodoCreate} = useContext(TodoContext);

    const onTodoChange = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value});

    const onCreate = () => {
        onTodoCreate({...todoValues, id: Math.random()});

        setTodoValues({
            title: '',
            description: '',
            id: null
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
    const {
        todos,
        doneTodos
    } = useContext(TodoContext);

    return (
        <header>
            <Link to="/">list</Link>
            <Link to="create-todo">add new todo</Link>

            <div style={{flex: 1}}/>

            <h3 style={{marginRight: 12}}>total todos: {todos.length}</h3>
            <h3 style={{marginRight: 12}}>active todos: {todos.length - doneTodos.length}</h3>
            <h3 style={{marginRight: 12}}>done todos: {doneTodos.length}</h3>
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
