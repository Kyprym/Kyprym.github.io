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
    const assortimentDesertsArr = [
        {
            name: "Медовик",
            img: medovik,
            description: "description"
        },
        {
            name: "Кофейный",
            img: koffe,
            description: "description"
        },
        {
            name: "Вишня в сметане",
            img: cherryInSourCream,
            description: "description"
        },
        {
            name: "Французский поцелуй",
            img: frnceKiss,
            description: "description"
        },
        {
            name: "Шоколад",
            img: chocolate,
            description: "description"
        },
        {
            name: "Рулет «Шоколадный»",
            img: rulette,
            description: "description"
        },
    ]


    return <div id="GlobalDessertsContantCompanent">
        <LogoComponent />
        <h1> Ассортимент</h1>
        <span className="assortimentDiscription">От нежных классических тортов до оригинальных десертов, приготовленых с любовью и заботой о качестве.</span>
        <span className="assortimentDiscription">Так же, вы можете скачать наш каталог</span>
        <a
            href='../../../files/catalog.pdf'
            target="_blank"
            id="assortimentCatalogButton"
            className="ContactChildComponent">
            скачать
        </a>


        <div id="DessertsContantCompanent">
            {
                assortimentDesertsArr.map(elem => {
                    return <DessertsChildContentCompanent
                        name={elem.name}
                        img={elem.img}
                        description={elem.description}
                        key={nanoid()}
                    />
                })
            }
        </div>



    </div>
}