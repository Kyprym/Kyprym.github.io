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
        if (descriptionDessertsState[0]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[0].name} img={assortimentDesertsArr[0].img} button={assortimentDesertsArr[0].button} />
        if (descriptionDessertsState[1]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[1].name} img={assortimentDesertsArr[1].img} button={assortimentDesertsArr[1].button} />
        if (descriptionDessertsState[2]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[2].name} img={assortimentDesertsArr[2].img} button={assortimentDesertsArr[2].button} />
        if (descriptionDessertsState[3]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[3].name} img={assortimentDesertsArr[3].img} button={assortimentDesertsArr[3].button} />
        if (descriptionDessertsState[4]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[4].name} img={assortimentDesertsArr[4].img} button={assortimentDesertsArr[4].button} />
        if (descriptionDessertsState[5]) return <DessertDescriptionWindowComponent name={assortimentDesertsArr[5].name} img={assortimentDesertsArr[5].img} button={assortimentDesertsArr[5].button} />

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
            clickFunc: medovikActive,
        },
        {
            name: "Кофейный",
            img: coffe,
            button: addButtonText,
            clickFunc: coffeActive,
        },
        {
            name: "Вишня в сметане",
            img: cherryInSourCream,
            button: addButtonText,
            clickFunc: cherryInSourCreamActive,
        },
        {
            name: "Французский поцелуй",
            img: franceKiss,
            button: addButtonText,
            clickFunc: franceKissActive,
        },
        {
            name: "Шоколад",
            img: chocolate,
            button: addButtonText,
            clickFunc: chocolateActive,
        },
        {
            name: "Рулет «Шоколадный»",
            img: rulette,
            button: addButtonText,
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