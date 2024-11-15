
import { useDispatch } from 'react-redux';

export const useDescriptionDessertsState = () => {
    const dispatch = useDispatch();

    const medovikActive = () => {
        dispatch(
            {
                type: "MEDOVIK_ACTIVE",
                payload: [true, false, false, false, false, false]
            })
    }

    const coffeActive = () => {
        dispatch({
            type: "COFFE_ACTIVE",
            payload: [false, true, false, false, false, false]
        })
    }

    const cherryInSourCreamActive = () => {
        dispatch({
            type: "CHERRY_IN_SOUR_CREAM_ACTIVE",
            payload: [false, false, true, false, false, false]
        })
    }

    const franceKissActive = () => {
        dispatch({
            type: "FRANCE_KISS_ACTIVE",
            payload: [false, false, false, true, false, false]
        })
    }

    const chocolateActive = () => {
        dispatch({
            type: "CHOCOLATE_ACTIVE",
            payload: [false, false, false, false, true, false]
        })
    }

    const ruletteActive = () => {
        dispatch({
            type: "RULLETTE_ACTIVE",
            payload: [false, false, false, false, false, true]
        })
    }
    const closeAllDessertDescription = () => {
        dispatch({
            type: "CLOSE_ALL_DESCRIPTIONS_DESSERTS",
            payload: [false, false, false, false, false, false]
        })
    }


    return {
        medovikActive,
        coffeActive,
        cherryInSourCreamActive,
        franceKissActive,
        chocolateActive,
        ruletteActive,
        closeAllDessertDescription
    };
};