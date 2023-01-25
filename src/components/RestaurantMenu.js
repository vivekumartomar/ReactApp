import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import MenuBody from "./MenuBody";
import MenuHeader from "./MenuHeader";

const RestaurantMenu = () =>{
    const {id} = useParams();
    const [restaurant, setRestauraunt] = useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
          id
        );
        const json = await data.json();
        // console.log(json.data);
        setRestauraunt(json.data);
      }
    return !restaurant ?(<h1>loading...</h1>):(
          <>
          <MenuHeader {...restaurant}/>
          <MenuBody {...restaurant?.menu}/>
          </>
    )
}

export default RestaurantMenu;