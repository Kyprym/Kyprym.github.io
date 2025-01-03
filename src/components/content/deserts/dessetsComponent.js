import { nanoid } from "nanoid"
import { LogoComponent } from "../../logo/logoCompanent"
import { DessertsChildContentCompanent } from "./dessertsChildContentCompanent"
import medovik from "../../../img/assortiment img/medovik.jpg"
import franceKiss from "../../../img/assortiment img/france_kiss.jpg"
import coffe from "../../../img/assortiment img/koffe.jpg"
import cherryInSourCream from "../../../img/assortiment img/cherries_in_sour_cream.jpg"
import chocolate from "../../../img/assortiment img/chocolate.jpg"
import rulette from "../../../img/assortiment img/rulette.jpg"
import { useDescriptionDessertsState } from "../../../store/actions/descriptionDessertsAction"
import { useSelector } from "react-redux"
import { DessertDescriptionWindowComponent } from "./dessertDescriptionWindowComponent"
import { useBasketActions } from "../../../store/actions/basketActions"




export const DessertsContantCompanent = () => {
    const descriptionDessertsState = useSelector(state => state.dessertsDescriptionState)
    const dessertInBasketState = useSelector(state => state.dessertInBasketState)

    const {
        addDessertINBusket,
        delDessertInBasket
    } = useBasketActions()

    const addButtonText = "Добавить"
    const {
        medovikActive,
        coffeActive,
        cherryInSourCreamActive,
        franceKissActive,
        chocolateActive,
        ruletteActive,
    } = useDescriptionDessertsState()

    const assortimentDesertsArr = [
        {
            name: "Медовик",
            img: medovik,
            button: addButtonText,
            description: "медовые коржи, сметанный крем с орехами, сметанный крем, медовые кейк-попсы",
            price: 3500,
            dessertCompaund: "яйца куриные, мука пшеничная высшего сорта, сливочное масло 82,5%, сметана 30%, желатин, сахар, сахарная пудра, сода пищевая, мед, уксус 9%, орехи грецкие.",
            clickFunc: medovikActive,
            counter: {
                text: "Медовик", count: dessertInBasketState[0].count, add: () => addDessertINBusket("Медовик"), del: () => delDessertInBasket("Медовик")
            },

        },
        {
            name: "Кофейный",
            img: coffe,
            button: addButtonText,
            description: "шоколадный бисквит, сливочная пропитка, крем «кофейный», заварной бисквит",
            price: 3400,
            dessertCompaund: "яйца куриные, мука пшеничная высшего сорта, кукурузный крахмал, какао- порошок, кофе растворимый, молоко 3, 2%, сметана 20%, сливки 33%, сливочное масло 82, 5%, масло растительное, желатин, сахар, соль, сода пищевая, вода.",
            clickFunc: coffeActive,
            counter: { text: "Кофейный", count: dessertInBasketState[1].count, add: () => addDessertINBusket("Кофейный"), del: () => delDessertInBasket("Кофейный") }
        },
        {
            name: "Вишня в сметане",
            img: cherryInSourCream,
            button: addButtonText,
            description: "бисквит с корицей, пропитка сливочная, вишневая начинка,сметанный мусс, сливочный крем",
            price: 4300,
            dessertCompaund: "яйца куриные, мука пшеничная высшего сорта, сахар, кукурузный крахмал, сливочное масло 82, 5%, сливки 33%, желатин, молоко 3, 2%, сметана 30%, вишня замороженная, корица молотая, апельсин, сахарная пудра, соль, сыр mascarpone, шоколад белый.",
            clickFunc: cherryInSourCreamActive,
            counter: { text: "Вишня в сметане", count: dessertInBasketState[2].count, add: () => addDessertINBusket("Вишня в сметане"), del: () => delDessertInBasket("Вишня в сметане") },
        },
        {
            name: "Французский поцелуй",
            img: franceKiss,
            button: addButtonText,
            description: "песочные коржи, шоколадный ганаш, сливочный крем, карамельные фрукты",
            price: 5100,
            dessertCompaund: "яйца куриные, мука пшеничная высшего сорта, сливки 33%, сливочное масло 82, 5%, шоколад молочный, шоколад темный, сыр mascarpone, желатин, сахар, сахарная пудра, разрыхлитель, соль, вода, груши, яблоки.",
            clickFunc: franceKissActive,
            counter: { text: "Французский поцелуй", count: dessertInBasketState[3].count, add: () => addDessertINBusket("Французский поцелуй"), del: () => delDessertInBasket("Французский поцелуй") },
        },
        {
            name: "Шоколад",
            img: chocolate,
            button: addButtonText,
            description: "шоколадно-кофейный бисквит, шоколадный мусс",
            price: 2700,
            dessertCompaund: "яйца куриные, желатин, шоколад молочный, шоколад темный, сливочное масло 82, 5%, сахар, какао- порошок, кофе растворимый, молоко 3, 2 %, сливки 33 %.",
            clickFunc: chocolateActive,
            counter: { text: "Шоколад", count: dessertInBasketState[4].count, add: () => addDessertINBusket("Шоколад"), del: () => delDessertInBasket("Шоколад") },
        },
        {
            name: "Рулет «Шоколадный»",
            img: rulette,
            button: addButtonText,
            description: "шоколадно-заварной бисквит, желе «вишня», сливочная пропитка, сливочный крем",
            price: 2100,
            dessertCompaund: "яйца куриные, мука пшеничная высшего сорта, молоко 3,2%, сливки 33%, сметана 30%, сливочное масло 82, 5%, какао- порошок, желатин, сахар, сахарная пудра, вишня замороженная, вода.",
            clickFunc: ruletteActive,
            counter: { text: "Рулет «Шоколадный»", count: dessertInBasketState[5].count, add: () => addDessertINBusket("Рулет «Шоколадный»"), del: () => delDessertInBasket("Рулет «Шоколадный»") },

        },
    ]

    const showDescriptionDessertWindow = () => {
        if (descriptionDessertsState[0]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[0].name} img={assortimentDesertsArr[0].img} button={assortimentDesertsArr[0].button} description={assortimentDesertsArr[0].description} price={assortimentDesertsArr[0].price} dessertCompaund={assortimentDesertsArr[0].dessertCompaund} addInBasket={assortimentDesertsArr[0].counter.add} />
        if (descriptionDessertsState[1]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[1].name} img={assortimentDesertsArr[1].img} button={assortimentDesertsArr[1].button} description={assortimentDesertsArr[1].description} price={assortimentDesertsArr[1].price} dessertCompaund={assortimentDesertsArr[1].dessertCompaund} addInBasket={assortimentDesertsArr[1].counter.add} />
        if (descriptionDessertsState[2]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[2].name} img={assortimentDesertsArr[2].img} button={assortimentDesertsArr[2].button} description={assortimentDesertsArr[2].description} price={assortimentDesertsArr[2].price} dessertCompaund={assortimentDesertsArr[2].dessertCompaund} addInBasket={assortimentDesertsArr[2].counter.add} />
        if (descriptionDessertsState[3]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[3].name} img={assortimentDesertsArr[3].img} button={assortimentDesertsArr[3].button} description={assortimentDesertsArr[3].description} price={assortimentDesertsArr[3].price} dessertCompaund={assortimentDesertsArr[3].dessertCompaund} addInBasket={assortimentDesertsArr[3].counter.add} />
        if (descriptionDessertsState[4]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[4].name} img={assortimentDesertsArr[4].img} button={assortimentDesertsArr[4].button} description={assortimentDesertsArr[4].description} price={assortimentDesertsArr[4].price} dessertCompaund={assortimentDesertsArr[4].dessertCompaund} addInBasket={assortimentDesertsArr[4].counter.add} />
        if (descriptionDessertsState[5]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[5].name} img={assortimentDesertsArr[5].img} button={assortimentDesertsArr[5].button} description={assortimentDesertsArr[5].description} price={assortimentDesertsArr[5].price} dessertCompaund={assortimentDesertsArr[5].dessertCompaund} addInBasket={assortimentDesertsArr[5].counter.add} />

    }

    return <div id="GlobalDessertsContantCompanent">
        <LogoComponent />
        <h1> Ассортимент</h1>
        <span className="assortimentDiscription">От нежных классических тортов до оригинальных десертов, приготовленых с любовью и заботой о качестве.</span>
        <span className="assortimentDiscription">Так же, вы можете скачать наш каталог</span>
        <a href='https://drive.google.com/file/d/16FQv36RAv4TbQ1E6tgC8RXm_Wp1kri97/view?usp=sharing'
            id="assortimentCatalogButton"
            className="ContactChildComponent">
            скачать</a>

        <div id="DessertsContantCompanent">
            {showDescriptionDessertWindow()}
            {
                assortimentDesertsArr.map(elem => {

                    return <DessertsChildContentCompanent
                        name={elem.name}
                        img={elem.img}
                        button={elem.button}
                        key={nanoid()}
                        clickFunc={elem.clickFunc}
                        addCount={elem.counter.add}
                    />

                })
            }
        </div>
    </div>
}