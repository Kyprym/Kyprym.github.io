import { createStore } from "redux"
import { rootReducer } from "./reducers/rootReducer"


export const globalStateStore = createStore(rootReducer)