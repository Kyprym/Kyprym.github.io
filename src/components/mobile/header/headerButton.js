
export const HeaderButton = ({ text, state, click }) => {
    return <div className="header_button" onClick={click} style={{ background: state ? 'linear-gradient(to bottom, #521a25, #ca6259)' : "none" }}>
        {text}
        {state ? <span className="buttom_line"></span> : <></>}
    </div>
}