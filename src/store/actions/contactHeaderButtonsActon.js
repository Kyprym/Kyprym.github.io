
import { useDispatch } from 'react-redux';

export const useHeaderButtonState = () => {
    const dispatch = useDispatch();

    const contactButtonActive = () => {
        dispatch(
            {
                type: "CONTACT_BUTTON_ACTIVE",
                payload: [true, false, false, false]
            })
    }

    const dessertButtonActive = () => {
        dispatch({
            type: "DESSERTS_BUTTON_ACTIVE",
            payload: [false, true, false, false]
        })
    }

    const aboutMeButtonActive = () => {
        dispatch({
            type: "ABOUT_ME_BUTTON_ACTIVE",
            payload: [false, false, true, false]
        })
    }

    const basketButtonActive = () => {
        dispatch({
            type: "BASKET_BUTTON_ACTIVE",
            payload: [false, false, false, true]
        })
    }




    return {
        contactButtonActive,
        dessertButtonActive,
        aboutMeButtonActive,
        basketButtonActive
    };
};