import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import MenuBody from "./MenuBody";
import MenuHeader from "./MenuHeader";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <h1>loading...</h1>
  ) : (
    <>
      <MenuHeader {...restaurant} />
      <MenuBody {...restaurant?.menu} />
    </>
  );
};

export default RestaurantMenu;
