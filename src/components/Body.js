import { restaurantList } from "../config.js";
import ReataurantCard from "./ReataurantCard.js";
import { useState } from "react";




const getFilterList = (searchTxt, restaurantListVar) =>{
    if(searchTxt ==""){
        return restaurantList;
    } else {
        return restaurantListVar.filter((restra)=>{
            return restra.data.name.includes(searchTxt);
        })
    }
}

const BodyComp = () => {
    const [searchTxt, setSearchTxt] = useState("KFC");
    const [restaurantListVar, setRestaurantList] = useState(restaurantList);
    return (
    <>
        <div className="search-bar">
        <input type="text" name="searchTxt"
         value={searchTxt}
         onChange={(e)=>{setSearchTxt(e.target.value)}}
         />
        <button onClick={()=>{
            const data = getFilterList(searchTxt, restaurantListVar)
            setRestaurantList(data);
            }
            }> Search</button>
        </div>
    <div className="restaurant-list">
    {    
        restaurantListVar.map((restra)=> {
        return <ReataurantCard {...restra.data} key={restra.data.id}/>
        })
    }
    </div>    
    </>
    )};

    export default BodyComp;