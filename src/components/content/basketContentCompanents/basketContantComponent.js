import { nanoid } from "nanoid"
import { BasketChildComponent } from "./basketChidComponent"
import { useSelector } from "react-redux"
import { useBasketActions } from "../../../store/actions/basketActions"
import { useState } from "react"


export const BasketContentComponent = () => {

    const [state, setState] = useState(false)

    const render = () => {
        setState(!state)
    }


    const {
        addDessertINBusket,
        delDessertInBasket,
        clearDessetInBasket,
        clearBasket,
    } = useBasketActions()

    const dessertInBasketState = useSelector(state => state.dessertInBasketState)

    let basketCountArr = [
        { text: "Медовик", count: dessertInBasketState[0].count, add: () => addDessertINBusket('Медовик'), del: () => delDessertInBasket('Медовик'), clear: () => clearDessetInBasket('Медовик') },
        { text: "Кофейный", count: dessertInBasketState[1].count, add: () => addDessertINBusket('Кофейный'), del: () => delDessertInBasket('Кофейный'), clear: () => clearDessetInBasket('Кофейный') },
        { text: "Вишня в сметане", count: dessertInBasketState[2].count, add: () => addDessertINBusket('Вишня в сметане'), del: () => delDessertInBasket('Вишня в сметане'), clear: () => clearDessetInBasket('Вишня в сметане') },
        { text: "Французский поцелуй", count: dessertInBasketState[3].count, add: () => addDessertINBusket('Французский поцелуй'), del: () => delDessertInBasket('Французский поцелуй'), clear: () => clearDessetInBasket('Французский поцелуй') },
        { text: "Шоколад", count: dessertInBasketState[4].count, add: () => addDessertINBusket('Шоколад'), del: () => delDessertInBasket('Шоколад'), clear: () => clearDessetInBasket('Шоколад') },
        { text: "Рулет «Шоколадный»", count: dessertInBasketState[5].count, add: () => addDessertINBusket('Рулет «Шоколадный»'), del: () => delDessertInBasket('Рулет «Шоколадный»'), clear: () => clearDessetInBasket('Рулет «Шоколадный»') },
    ]

    const basketCountInLocalStorageArr = [
        {
            name: basketCountArr[0].text,
            count: basketCountArr[0].count
        },
        {
            name: basketCountArr[1].text,
            count: basketCountArr[1].count
        },
        {
            name: basketCountArr[2].text,
            count: basketCountArr[2].count
        },
        {
            name: basketCountArr[3].text,
            count: basketCountArr[3].count
        },
        {
            name: basketCountArr[4].text,
            count: basketCountArr[4].count
        },
        {
            name: basketCountArr[5].text,
            count: basketCountArr[5].count
        },

    ]

    const basketJson = JSON.stringify(basketCountInLocalStorageArr)
    const basketSetInLocalStorage = () => {
        localStorage.setItem('basket', basketJson)
    }


    basketSetInLocalStorage()

    return <div id="BasketContentComponent" onClick={render}>
        <table>
            <tbody>
                {(dessertInBasketState[0].count === 0 &&
                    dessertInBasketState[1].count === 0 &&
                    dessertInBasketState[2].count === 0 &&
                    dessertInBasketState[3].count === 0 &&
                    dessertInBasketState[4].count === 0 &&
                    dessertInBasketState[5].count === 0) ? <tr id="basketNullText">Ваша корзина пуста</tr> :
                    <tr id="tHeader">
                        <td>Добавить</td>
                        <td>Удалить</td>
                        <td>Кол-во</td>
                        <td>Наименование</td>
                        <td>Очистить</td>
                    </tr>
                }
                {basketCountArr.map(elem => {

                    return <BasketChildComponent
                        key={nanoid()}
                        text={elem.text}
                        count={elem.count}
                        addCountFunc={elem.add}
                        delCountFunc={elem.del}
                        clearCountFunc={elem.clear}
                    />

                })}
            </tbody>
        </table>
        {(dessertInBasketState[0].count === 0 &&
            dessertInBasketState[1].count === 0 &&
            dessertInBasketState[2].count === 0 &&
            dessertInBasketState[3].count === 0 &&
            dessertInBasketState[4].count === 0 &&
            dessertInBasketState[5].count === 0) ? <></> :
            <div className="clearBasketButton"><span onClick={clearBasket}>Очистить корзину</span></div>
        }
    </div>
}