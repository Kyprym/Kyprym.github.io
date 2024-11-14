import { nanoid } from "nanoid"
import { LogoComponent } from "../../logo/logoCompanent"
import { DessertsChildContentCompanent } from "./dessertsChildContentCompanent"
import medovik from "../../../img/assortiment img/medovik.png"
import frnceKiss from "../../../img/assortiment img/france_kiss.png"
import koffe from "../../../img/assortiment img/koffe.png"
import cherryInSourCream from "../../../img/assortiment img/cherries_in_sour_cream.png"
import chocolate from "../../../img/assortiment img/chocolate.png"
import rulette from "../../../img/assortiment img/rulette.png"



export const DessertsContantCompanent = () => {
    const addButtonText = "Добавить"
    const assortimentDesertsArr = [
        {
            name: "Медовик",
            img: medovik,
            button: addButtonText
        },
        {
            name: "Кофейный",
            img: koffe,
            button: addButtonText
        },
        {
            name: "Вишня в сметане",
            img: cherryInSourCream,
            button: addButtonText
        },
        {
            name: "Французский поцелуй",
            img: frnceKiss,
            button: addButtonText
        },
        {
            name: "Шоколад",
            img: chocolate,
            button: addButtonText
        },
        {
            name: "Рулет «Шоколадный»",
            img: rulette,
            button: addButtonText
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
            {
                assortimentDesertsArr.map(elem => {
                    return <DessertsChildContentCompanent
                        name={elem.name}
                        img={elem.img}
                        button={elem.button}
                        key={nanoid()}
                    />
                })
            }
        </div>
    </div>
}