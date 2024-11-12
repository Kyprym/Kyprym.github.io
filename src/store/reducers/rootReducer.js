import { combineReducers } from "redux";
import { HeaderButtonReducer } from "./HeaderButtonReducer"



export const rootReducer = combineReducers({
    buttonState: HeaderButtonReducer,

}) 