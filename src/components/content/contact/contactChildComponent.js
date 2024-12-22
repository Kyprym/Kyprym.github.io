export const ContactChildComponent = ({ text, icon, openMessenger }) => {

    return <div className="PCcontactChildComponent" onClick={openMessenger}>
        <div className="ContactChildComponentText">{text}</div>
        <div className="ContactChildComponentIcon">{icon}</div>
    </div>
}