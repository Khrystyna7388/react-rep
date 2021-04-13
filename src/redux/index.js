import {createStore} from "redux";
import {reducer} from "./redusers";

export const store = createStore(reducer);