import { useDescriptionDessertsState } from "../../../store/actions/descriptionDessertsAction"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const DessertDescriptionWindowComponent = ({ name, img, description, button }) => {
    const { closeAllDessertDescription } = useDescriptionDessertsState()

    return <div className="DessertDescriptionWindowComponent ">

        <div onClick={closeAllDessertDescription}
            className="closeDessertDescriptionWindowComponent"
        >{<HighlightOffIcon style={{ fontSize: '3rem', color: '#4a1a1a', borderRadius: "25% 25%" }} />}</div>

        <img src={img} alt="description" />
        {name}
        {description}
        <div className="DessertsChildbutton ContactChildComponent">
            <span>{button}</span>
        </div>
    </div>
}