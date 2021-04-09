import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import {TodoContextProvider} from "../provider/TodoContextProvider";
import {Header} from "../header/Header";
import {TodoList} from "../todo_list/TodoList";
import {AddTodo} from "../add_todo/AddTodo";

export const RouterTodos = () => {

    return(
        <TodoContextProvider>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/list">
                        <TodoList/>
                    </Route>

                    <Route path="/create-todo">
                        <AddTodo/>
                    </Route>

                </Switch>
            </Router>
        </TodoContextProvider>
    )
}