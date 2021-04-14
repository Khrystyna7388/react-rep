import {
    SET_TODO,
    TOGGLE_TODO_STATUS,
    REMOVE_TODO
} from "../action-types";

export const setTodos = (payload) => ({type: SET_TODO, payload});
export const toggleTodoStatus = (payload) => ({type: TOGGLE_TODO_STATUS, payload});
export const removeTodo = (payload) => ({type: REMOVE_TODO, payload});

export const fetchTodos = async (dispatch) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        dispatch(setTodos(data));
    } catch (e) {
        console.error(e)
    }
}