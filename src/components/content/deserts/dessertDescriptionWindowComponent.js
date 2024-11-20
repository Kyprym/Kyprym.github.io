import { useDescriptionDessertsState } from "../../../store/actions/descriptionDessertsAction"
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AccordionUsage from "./dessetsAccordion";


export const DessertDescriptionWindowComponent = ({ name, img, description, price, button, dessertCompaund }) => {
    const { closeAllDessertDescription } = useDescriptionDessertsState()

    return <div className="DessertDescriptionWindowComponent ">

        <div onClick={closeAllDessertDescription}
            className="closeDessertDescriptionWindowComponent"
        >{<HighlightOffIcon style={{ fontSize: '3rem', color: '#4a1a1a', borderRadius: "25% 25%" }} />}</div>

        <img src={img} alt="description" />
        <h1>{name}</h1>
        <div>
            <div className="dessertsDescription">{description}</div>
        </div>
        <AccordionUsage compound={dessertCompaund} />
        <div className="price">{price} <CurrencyRubleIcon /></div>
        <div className="DessertsChildbutton ContactChildComponent">
            <span>{button}</span>
        </div>

    </div>
}