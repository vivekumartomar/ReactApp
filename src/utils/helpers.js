const getFilterList = (searchTxt, getRestaurantsList) =>{
    return getRestaurantsList.filter((restra)=>{
        return restra?.data?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase());
    })
}
export default getFilterList;