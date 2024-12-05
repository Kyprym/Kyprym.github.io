import { nanoid } from "nanoid"
import { BasketChildComponent } from "./basketChidComponent"
import { useSelector } from "react-redux"
import { useBasketActions } from "../../../store/actions/basketActions"


export const BasketContentComponent = () => {

    const dessertInBasketState = useSelector(state => state.dessertInBasketState)

    const {
        addDessertINBusket,
        delDessertInBasket
    } = useBasketActions()


    const basketCountArr = [
        { text: "Медовик", count: dessertInBasketState[0].count, add: () => addDessertINBusket('Медовик'), del: () => delDessertInBasket('Медовик') },
        { text: "Кофейный", count: dessertInBasketState[1].count, add: () => addDessertINBusket('Кофейный'), del: () => delDessertInBasket('Кофейный') },
        { text: "Вишня в сметане", count: dessertInBasketState[2].count, add: () => addDessertINBusket('Вишня в сметане'), del: () => delDessertInBasket('Вишня в сметане') },
        { text: "Французский поцелуй", count: dessertInBasketState[3].count, add: () => addDessertINBusket('Французский поцелуй'), del: () => delDessertInBasket('Французский поцелуй') },
        { text: "Шоколад", count: dessertInBasketState[4].count, add: () => addDessertINBusket('Шоколад'), del: () => delDessertInBasket('Шоколад') },
        { text: "Рулет «Шоколадный»", count: dessertInBasketState[5].count, add: () => addDessertINBusket('Рулет «Шоколадный»'), del: () => delDessertInBasket('Рулет «Шоколадный»') },
    ]







    return <div id="BasketContentComponent">
        <table>
            <tbody>
                {basketCountArr.map(elem => {

                    return <BasketChildComponent
                        key={nanoid()}
                        text={elem.text}
                        count={elem.count}
                        addCountFunc={elem.add}
                        delCountFunc={elem.del}
                    />

                })}
            </tbody>
        </table>
    </div>
}