import {
    INC_TWO,
    INC_CUSTOM_TWO,
    DEC_TWO,
    RESET_TWO
} from "../action-types";

const incActionTwo = () => ({type: INC_TWO});
const incCustomActionTwo = (payload) => ({type: INC_CUSTOM_TWO, payload});
const decActionTwo = () => ({type: DEC_TWO});
const resetActionTwo = () => ({type: RESET_TWO})

export {
    incActionTwo,
    incCustomActionTwo,
    decActionTwo,
    resetActionTwo
}