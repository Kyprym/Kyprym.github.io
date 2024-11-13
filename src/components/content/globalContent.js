import { ContactContentCompanent } from "./contactContent"
import { useSelector } from "react-redux"
import { DessertsContantCompanent } from "./dessetsComponent";
import { AboutMeContentComponent } from "./aboutMeContentComponent";
import { BasketContentComponent } from "./basketContantComponent";

export const GlobalContentCompanent = () => {

    const contentState = useSelector(state => state.buttonState)




    return <div>{
        contentState[0] ? <ContactContentCompanent />
            : contentState[1] ? <><DessertsContantCompanent /></>
                : contentState[2] ? <><AboutMeContentComponent /></>
                    : contentState[3] ? <BasketContentComponent /> : <></>
    }</div>;

}