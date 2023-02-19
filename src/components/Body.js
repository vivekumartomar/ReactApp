import { restaurantList } from "../config.js";
import ReataurantCard from "./ReataurantCard.js";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import getFilterList from "../utils/helpers.js";
import useRestaurantsList from "../utils/useRestaurantsList.js";
import userContext from "../utils/userContext.js";

const BodyComp = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const getRestaurant = useRestaurantsList();
  const getRestaurantsList = useRestaurantsList();
  const { user, setUser} = useContext(userContext);


  return !getRestaurant.length > 0 ? (
    <Shimmer />
  ) : (
    <>
    <input type="text" value={user.name} onChange={(event)=>{
        setUser({
            name:event.target.value,
            email:"test"
        });
    }}/>
      <div className="search-bar">
        <input
          type="text"
          className="search_box"
          name="searchTxt"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = getFilterList(searchTxt, getRestaurantsList);
            setRestauraunt(data);
          }}
        >
          {" "}
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {getRestaurant.map((restra) => {
          return (
            <Link to={"/restaurant/" + restra.data.id} key={restra.data.id}>
              <ReataurantCard {...restra.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BodyComp;
