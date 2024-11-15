import { nanoid } from "nanoid"
import { LogoComponent } from "../../logo/logoCompanent"
import { DessertsChildContentCompanent } from "./dessertsChildContentCompanent"
import medovik from "../../../img/assortiment img/medovik.png"
import franceKiss from "../../../img/assortiment img/france_kiss.png"
import coffe from "../../../img/assortiment img/koffe.png"
import cherryInSourCream from "../../../img/assortiment img/cherries_in_sour_cream.png"
import chocolate from "../../../img/assortiment img/chocolate.png"
import rulette from "../../../img/assortiment img/rulette.png"
import { useDescriptionDessertsState } from "../../../store/actions/descriptionDessertsAction"
import { useSelector } from "react-redux"
import { DessertDescriptionWindowComponent } from "./dessertDescriptionWindowComponent"




export const DessertsContantCompanent = () => {
    const descriptionDessertsState = useSelector(state => state.dessertsDescriptionState)

    const showDescriptionDessertWindow = () => {
        if (descriptionDessertsState[0]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[0].name} img={assortimentDesertsArr[0].img} button={assortimentDesertsArr[0].button} description={assortimentDesertsArr[0].description} price={assortimentDesertsArr[0].price} />
        if (descriptionDessertsState[1]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[1].name} img={assortimentDesertsArr[1].img} button={assortimentDesertsArr[1].button} description={assortimentDesertsArr[1].description} price={assortimentDesertsArr[1].price} />
        if (descriptionDessertsState[2]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[2].name} img={assortimentDesertsArr[2].img} button={assortimentDesertsArr[2].button} description={assortimentDesertsArr[2].description} price={assortimentDesertsArr[2].price} />
        if (descriptionDessertsState[3]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[3].name} img={assortimentDesertsArr[3].img} button={assortimentDesertsArr[3].button} description={assortimentDesertsArr[3].description} price={assortimentDesertsArr[3].price} />
        if (descriptionDessertsState[4]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[4].name} img={assortimentDesertsArr[4].img} button={assortimentDesertsArr[4].button} description={assortimentDesertsArr[4].description} price={assortimentDesertsArr[4].price} />
        if (descriptionDessertsState[5]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[5].name} img={assortimentDesertsArr[5].img} button={assortimentDesertsArr[5].button} description={assortimentDesertsArr[5].description} price={assortimentDesertsArr[5].price} />

    }

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
            clickFunc: medovikActive,
        },
        {
            name: "Кофейный",
            img: coffe,
            button: addButtonText,
            description: "шоколадный бисквит, сливочная пропитка, крем «кофейный», заварной бисквит",
            price: 3400,
            clickFunc: coffeActive,
        },
        {
            name: "Вишня в сметане",
            img: cherryInSourCream,
            button: addButtonText,
            description: "бисквит с корицей, пропитка сливочная, вишневая начинка,сметанный мусс, сливочный крем",
            price: 4300,
            clickFunc: cherryInSourCreamActive,
        },
        {
            name: "Французский поцелуй",
            img: franceKiss,
            button: addButtonText,
            description: "песочные коржи, шоколадный ганаш, сливочный крем, карамельные фрукты",
            price: 5100,
            clickFunc: franceKissActive,
        },
        {
            name: "Шоколад",
            img: chocolate,
            button: addButtonText,
            description: "шоколадно-кофейный бисквит, шоколадный мусс",
            price: 2700,
            clickFunc: chocolateActive,
        },
        {
            name: "Рулет «Шоколадный»",
            img: rulette,
            button: addButtonText,
            description: "шоколадно-заварной бисквит, желе «вишня», сливочная пропитка, сливочный крем",
            price: 2100,
            clickFunc: ruletteActive,
        },
    ]


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
                    />

                })
            }
        </div>
    </div>
}