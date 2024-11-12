
export const HeaderButton = ({ text, state, click }) => {
    return <div className="header_button" onClick={click}>
        {text}
        {state ? <span className="buttom_line"></span> : <></>}
    </div>
}