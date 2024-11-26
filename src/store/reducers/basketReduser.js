
const defaultState = [
    { name: "Medovik", count: 0 },
    { name: "Medovik_1", count: 0 },
    { name: "Medovik_2", count: 0 },
    { name: "Medovik_3", count: 0 },

]

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

    switch (action.type) {
        case "ADD_DESSERT":
            addCount(action.payload)
            return state
        case "DEL_DESSERT":
            delCount(action.payload)
            return state
        default:
            return state
    }
}