
export const HeaderButton = ({ text, state, click }) => {
    return <div className="header_button" onClick={click} style={{ background: state ? 'linear-gradient(to right, #a86c78, #ca6259)' : "none" }}>
        {text}
        {state ? <span className="buttom_line"></span> : <></>}
    </div>
}