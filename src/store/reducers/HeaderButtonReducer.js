
const defaultState = [true, false, false, false]
export const HeaderButtonReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CONTACT_BUTTON_ACTIVE":
            return action.payload
        case "DESSERTS_BUTTON_ACTIVE":
            return action.payload

        case "ABOUT_ME_BUTTON_ACTIVE":
            return action.payload

        case "BASKET_BUTTON_ACTIVE":
            return action.payload
        default:
            return state
    }
}