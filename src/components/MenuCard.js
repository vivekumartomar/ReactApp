import { IMG_CDN_URL } from "../config";

const MenuCard = ({id, name, price, cloudinaryImageId, description}) =>{
    // console.log(id, name, price, cloudinaryImageId);
    return(
        // <div className="menu-body">
        <>
        <div className="menu-body-card-content">
            <div className="menu-description">
                <h3>  {name}</h3>
                <div><h5> $ {price}</h5></div>
                <div className="menu-item-description">
                <p>{description}</p>
                </div>

            </div>
            <div className="menu-desc-image">

                <img src={IMG_CDN_URL+cloudinaryImageId} alt="menu-item image"/>

            </div>

           </div>
           <div className="line"></div>
    </>
    )
}

export default MenuCard;