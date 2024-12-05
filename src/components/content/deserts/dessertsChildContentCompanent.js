export const DessertsChildContentCompanent = ({ name, img, button, clickFunc, addCount }) => {
    return <div
        className="DessertsChildContentCompanent">
        <img src={img} alt="dessert img" onClick={clickFunc} />
        <div className="DessertInformation">

            <span>{name}</span>
            <div onClick={addCount} className="DessertsChildbutton ContactChildComponent">
                <span>{button}</span>
            </div>
        </div>

    </div>
}