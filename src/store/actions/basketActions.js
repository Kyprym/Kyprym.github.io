import { useDispatch } from "react-redux"

export const useBasketActions = () => {
    const dispatch = useDispatch()

    const addDessertINBusket = (dessertName) => {
        dispatch({
            type: "ADD_DESSERT",
            payload: dessertName
        })
    }

    const delDessertInBasket = (dessertName) => {
        dispatch({
            type: "DEL_DESSERT",
            payload: dessertName
        })
    }


    const clearDessetInBasket = (dessertName) => {
        dispatch({
            type: "CLEAR_DESSERT",
            payload: dessertName
        })
    }
    return {
        addDessertINBusket,
        delDessertInBasket,
        clearDessetInBasket
    }
}