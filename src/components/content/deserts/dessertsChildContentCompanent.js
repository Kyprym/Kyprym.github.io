export const DessertsChildContentCompanent = ({ name, img, button, clickFunc }) => {
    return <div className="DessertsChildContentCompanent">
        <img src={img} alt="dessert img" />
        <div className="DessertInformation">
            <span>{name}</span>
            <div className="DessertsChildbutton ContactChildComponent" onClick={clickFunc}>
                <span>{button}</span>
            </div>
        </div>
    </div>
}