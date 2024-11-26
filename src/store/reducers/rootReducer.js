import { combineReducers } from "redux";
import { HeaderButtonReducer } from "./HeaderButtonReducer"
import { DescriptionDessertsReducer } from "./descriptionDessertsReducer";
import { BasketReduser } from "./basketReduser";



export const rootReducer = combineReducers({
    buttonState: HeaderButtonReducer,
    dessertsDescriptionState: DescriptionDessertsReducer,
    dessertInBasketState: BasketReduser
}) 