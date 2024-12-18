
const getBasketListFromLocalStorage = () => {

    const JSONdata = JSON.parse(localStorage.getItem('BasketUserData'))
    if (JSONdata) {
        return JSONdata
    } else {
        return [
            { name: "Медовик", count: 0 },
            { name: "Кофейный", count: 0 },
            { name: "Вишня в сметане", count: 0 },
            { name: "Французский поцелуй", count: 0 },
            { name: "Шоколад", count: 0 },
            { name: "Рулет «Шоколадный»", count: 0 },
        ]
    }




}


export const defaultBasketState = getBasketListFromLocalStorage()







