export const DessertsChildContentCompanent = ({ name, img, button, clickFunc }) => {
    return <div
        className="DessertsChildContentCompanent">
        <img src={img} alt="dessert img" onClick={clickFunc} />
        <div className="DessertInformation">

            <span>{name}</span>
            <div className="DessertsChildbutton ContactChildComponent">
                <span>{button}</span>
            </div>
        </div>

    </div>
}