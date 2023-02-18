import React from "react";
import { useEffect, useState } from "react";

const useRestaurantsList = () => {
  const [getRestaurant, setRestauraunt] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data);
    setRestauraunt(json?.data?.cards[2]?.data?.data?.cards);
  }
  return getRestaurant;
};

export default useRestaurantsList;
