export const PCdessertsChildContentCompanent = ({ name, img, button, clickFunc, addCount }) => {
    return <div
        className="PCdessertsChildContentCompanent">
        <img src={img} alt="dessert img" onClick={clickFunc} />
        <div className="PCdessertInformation">

            <span>{name}</span>
            <div onClick={addCount} className="PCdessertsChildbutton PCcontactChildComponent">
                <span>{button}</span>
            </div>
        </div>

    </div>
}