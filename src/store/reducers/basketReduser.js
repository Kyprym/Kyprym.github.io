import { defaultBasketState } from "../BasketList"



export const BasketReduser = (state = defaultBasketState, action) => {

    const addCount = (name) => {
        state.map(elem => {
            if (elem.name === name) {
                elem.count += 1
            }
        })
    }

    const delCount = (name) => {
        state.map(elem => {
            if (elem.name === name) {
                if (elem.count !== 0) {
                    elem.count -= 1
                }
            }
        })
    }

    const clearCount = (name) => {
        state.map(elem => {
            if (elem.name === name) {
                if (elem.count !== 0) {
                    elem.count = 0

                }
            }
        })
    }

    const clearBasket = () => {
        state.map(elem => {
            elem.count = 0
        })
    }



    switch (action.type) {
        case "ADD_DESSERT":
            addCount(action.payload)
            return state
        case "DEL_DESSERT":
            delCount(action.payload)
            return state
        case "CLEAR_DESSERT":
            clearCount(action.payload)
            return state
        case 'CLEAR_BASKET':
            clearBasket()
            return state
        default:
            return state

    }
}