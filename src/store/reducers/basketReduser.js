const basketData = localStorage.getItem('basket')
const basketDataJson = JSON.parse(basketData)
const defaultState = []

const checkCountInLocalStorage = () => {
    for (let i = 0; i < basketDataJson.length; i++) {
        if (basketDataJson[i].count !== 0) {
            return true
        } else {
            return false
        }
    }
}



if (checkCountInLocalStorage()) {
    for (let i = 0; i < basketDataJson.length; i++) {
        defaultState.push(basketDataJson[i])
    }
} else {
    defaultState.push(
        { name: "Медовик", count: 0 },
        { name: "Кофейный", count: 0 },
        { name: "Вишня в сметане", count: 0 },
        { name: "Французский поцелуй", count: 0 },
        { name: "Шоколад", count: 0 },
        { name: "Рулет «Шоколадный»", count: 0 },
    )
}


export const BasketReduser = (state = defaultState, action) => {

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