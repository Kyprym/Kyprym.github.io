
const defaultState = [false, false, false, false, false, false]
export const DescriptionDessertsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "MEDOVIK_ACTIVE":
            return action.payload
        case "COFFE_ACTIVE":
            return action.payload

        case "CHERRY_IN_SOUR_CREAM_ACTIVE":
            return action.payload

        case "FRANCE_KISS_ACTIVE":
            return action.payload
        case "CHOCOLATE_ACTIVE":
            return action.payload
        case "RULLETTE_ACTIVE":
            return action.payload
        case "CLOSE_ALL_DESCRIPTIONS_DESSERTS":
            return action.payload
        default:
            return state
    }
}