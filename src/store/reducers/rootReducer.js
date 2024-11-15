import { combineReducers } from "redux";
import { HeaderButtonReducer } from "./HeaderButtonReducer"
import { DescriptionDessertsReducer } from "./descriptionDessertsReducer";



export const rootReducer = combineReducers({
    buttonState: HeaderButtonReducer,
    dessertsDescriptionState: DescriptionDessertsReducer
}) 