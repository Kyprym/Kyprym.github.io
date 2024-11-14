export const ContactChildComponent = ({ text, icon, openMessenger }) => {

    return <div className="ContactChildComponent" onClick={openMessenger}>
        <div className="ContactChildComponentText">{text}</div>
        <div className="ContactChildComponentIcon">{icon}</div>
    </div>
}