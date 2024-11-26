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



    const testArr = [
        { text: "Medovik", count: dessertInBasketState[0].count, add: () => addDessertINBusket('Medovik'), del: () => delDessertInBasket('Medovik') },
        { text: "Medovik_1", count: dessertInBasketState[1].count, add: () => addDessertINBusket('Medovik_1'), del: () => delDessertInBasket('Medovik_1') },
        { text: "Medovik_2", count: dessertInBasketState[2].count, add: () => addDessertINBusket('Medovik_2'), del: () => delDessertInBasket('Medovik_2') },
        { text: "Medovik_3", count: dessertInBasketState[3].count, add: () => addDessertINBusket('Medovik_3'), del: () => delDessertInBasket('Medovik_3') }

    ]


    return <div id="BasketContentComponent">
        <table>
            <tbody>
                {testArr.map(elem => {

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