import {
    INC,
    DEC,
    RESET,
    INC_CUSTOM
} from "../action-types";

const incAction = () => ({type: INC});
const decAction = () => ({type: DEC});
const resetAction = () => ({type: RESET});
const incCustomAction = (payload) => ({type: INC_CUSTOM, payload})

export {
    incAction,
    decAction,
    resetAction,
    incCustomAction
}