import { ContactContentCompanent } from "./contactContent"
import { useSelector } from "react-redux"
import { DessertsContantCompanent } from "./dessetsComponent";
import { AboutMeContentComponent } from "./aboutMeContentComponent";
import { BasketContentComponent } from "./basketContantComponent";
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