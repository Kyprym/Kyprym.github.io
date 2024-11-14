export const DessertsChildContentCompanent = ({ name, img, description }) => {
    return <div className="DessertsChildContentCompanent">
        <img src={img} alt="dessert img" />
        <div className="DessertInformation">
            <span>{name}</span>
            <div>{description}</div>
        </div>
    </div>
}