import { restaurantList } from "../config.js";
import ReataurantCard from "./ReataurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";




const getFilterList = (searchTxt, getRestaurantsList) =>{
        return getRestaurantsList.filter((restra)=>{
            return restra?.data?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase());
        })
}

const BodyComp = () => {
    const [searchTxt, setSearchTxt] = useState("");
    const [getRestaurantsList, setRestaurantList] = useState([]);
    const [getRestaurant, setRestauraunt] = useState([]);

    useEffect(()=>{
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
          );
        const json = await data.json();
        // console.log(json.data);
        setRestauraunt(json?.data?.cards[2]?.data?.data?.cards);
        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
      }


    return (!getRestaurant.length > 0)? (<Shimmer/> ):(
    <>
        <div className="search-bar">
        <input type="text" className="search_box" name="searchTxt"
         value={searchTxt}
         onChange={(e)=>{setSearchTxt(e.target.value)}}
         />
        <button onClick={()=>{
            const data = getFilterList(searchTxt, getRestaurantsList)
            setRestauraunt(data);
            }
            }> Search</button>
        </div>
    <div className="restaurant-list">
    {    
        getRestaurant.map((restra)=> {
        return (
        <Link to={'/restaurant/'+restra.data.id} key={restra.data.id}>
        <ReataurantCard {...restra.data} />
        </Link>
        )
        })
    }
    </div>    
    </>
    )};

    export default BodyComp;