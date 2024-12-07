import { ContactContentCompanent } from "./contact/contactContent"
import { useSelector } from "react-redux"
import { DessertsContantCompanent } from "./deserts/dessetsComponent";
import { AboutMeContentComponent } from "./about_me/aboutMeContentComponent";
import { BasketContentComponent } from "./basketContentCompanents/basketContantComponent";
import { useMemo } from "react";


export const GlobalContentCompanent = () => {

    const contentState = useSelector(state => state.buttonState)
    const contact = useMemo(() => {
        if (contentState[0]) return <ContactContentCompanent />;
        if (contentState[1]) return <DessertsContantCompanent />;
        if (contentState[2]) return <AboutMeContentComponent />;
        if (contentState[3]) return <BasketContentComponent />;
        return null;
    }, [contentState])

    return <div id="GlobalContentCompanent">
        {contact}
    </div>;

}