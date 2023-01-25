import { IMG_CDN_URL } from "../config";
const MenuHeader = ({cloudinaryImageId, name, area, city, avgRating, costForTwoMsg}) =>{
    return(
        <div className="menu-header">
            <div className="menu-main-content">
                    <img src={IMG_CDN_URL+cloudinaryImageId} alt="menu Image" />
                <div className="menu-heading">
                <h1>{name}</h1>
                    <div className="sub-heading-text">{area}</div>
                    <div className="sub-heading-text">{city}</div>
                    <div className="sub-heading-text">
                        <span>Avg rating: {avgRating}</span>
                        <span className="space">|</span>
                        <span>Cost: {costForTwoMsg}</span>
                        </div>
                </div>
            </div>
            {/* <div className="float-right">
            <p><h1>Heading2</h1></p>
            </div> */}

        </div>
    )
}

export default MenuHeader;