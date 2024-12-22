import { PCcontactContentCompanent } from "./contact/PCcontactContent"
import { useSelector } from "react-redux"
import { PCdessertsContantCompanent } from "./deserts/PCdessetsComponent";
import { PCaboutMeContentComponent } from "./about_me/PCaboutMeContentComponent";
import { BasketContentComponent } from "./basketContentCompanents/basketContantComponent";
import { useMemo } from "react";


export const PCglobalContentCompanent = () => {

    const contentState = useSelector(state => state.buttonState)
    const contact = useMemo(() => {
        if (contentState[0]) return <PCcontactContentCompanent />;
        if (contentState[1]) return < PCdessertsContantCompanent />;
        if (contentState[2]) return <PCaboutMeContentComponent />;
        if (contentState[3]) return <BasketContentComponent />;
        return null;
    }, [contentState])

    return <div id="GlobalContentCompanent">
        {contact}
    </div>;

}