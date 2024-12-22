import { useDescriptionDessertsState } from "../../../store/actions/descriptionDessertsAction"
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AccordionUsage from "./dessetsAccordion";

const blockScroll = () => {
    document.body.style.overflow = 'hidden';
}

const unblockScroll = () => {
    document.body.style.overflow = 'auto';
}


export const PCdessertDescriptionWindowComponent = ({ name, img, description, price, button, dessertCompaund, addInBasket }) => {
    const { closeAllDessertDescription } = useDescriptionDessertsState()


    blockScroll()

    return <div className="PCdessertDescriptionWindowComponent ">

        <div onClick={() => {
            closeAllDessertDescription()
            unblockScroll()
        }}
            className="closeDessertDescriptionWindowComponent"
        >{<HighlightOffIcon style={{ fontSize: '3rem', color: '#4a1a1a', borderRadius: "25% 25%" }} />}</div>

        <div>
            <img src={img} alt="description" />
            <h1>{name}</h1>
        </div>
        <div className="PCwindowDessertDescription">
            <div>
                <div className="PCdessertsDescription">{description}</div>
            </div>
            <AccordionUsage compound={dessertCompaund} />
            <div className="price">{price} <CurrencyRubleIcon /></div>
            <div
                onClick={addInBasket}
                className="PCdessertsChildbutton PCcontactChildComponent">
                <span>{button}</span>
            </div>
        </div>

    </div>
}