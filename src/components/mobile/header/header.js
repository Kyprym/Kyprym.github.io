import { useSelector } from "react-redux"
import { HeaderButton } from "./headerButton"
import { useHeaderButtonState } from "../../../store/actions/contactHeaderButtonsActon"
import { nanoid } from "nanoid"
import aboutMeImmGLogo from '../../../img/LOGO NR.png'

export const HeaderComponent = () => {

    const buttonState = useSelector(state => state.buttonState)

    const aboutMeButtonIMG = <img src={aboutMeImmGLogo} alt="logo" />



    const {
        contactButtonActive,
        dessertButtonActive,
        aboutMeButtonActive,
        basketButtonActive
    }
        = useHeaderButtonState()

    const headerButtonsTextArr = [
        {
            text: aboutMeButtonIMG,
            state: buttonState[2],
            clickFunc: aboutMeButtonActive
        },
        {
            text: 'Контакты',
            state: buttonState[0],
            clickFunc: contactButtonActive
        },
        {
            text: 'десерты',
            state: buttonState[1],
            clickFunc: dessertButtonActive
        },

        {
            text: 'корзина',
            state: buttonState[3],
            clickFunc: basketButtonActive
        }
    ]

    return <div className="fuctional_component header" >
        {headerButtonsTextArr.map((elem) => {
            return <HeaderButton
                text={elem.text}
                state={elem.state}
                key={nanoid()}
                click={elem.clickFunc}
            />
        })}
    </div>
}