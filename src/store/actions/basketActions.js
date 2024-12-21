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

    const clearBasket = () => {
        dispatch({
            type: "CLEAR_BASKET",
        })
    }


<<<<<<< HEAD
=======

>>>>>>> 17f37e20aa36219bac9effdf00a7dd2a585a4434
    return {
        addDessertINBusket,
        delDessertInBasket,
        clearDessetInBasket,
        clearBasket,
    }
}