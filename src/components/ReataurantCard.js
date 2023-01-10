const ReataurantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    // Using props destructuring
    // const {name, cuisines, avgRating, cloudinaryImageId} = props.restrautr;
    // console.log(props);
    return (
    <div className="card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
         cloudinaryImageId} 
        alt="restaurant image"/>
        <h3>{name}</h3>
        <h6>{cuisines.join(", ")}</h6>
        <h6>{avgRating}</h6>
    </div>
  )}

  export default ReataurantCard;