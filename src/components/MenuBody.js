import { useState } from "react";
import { IMG_CDN_URL } from "../config";
import MenuCard from "./MenuCard";
// import MenuRecomended from "./MenuRecomended";

const searchMenu = (text, list)=>{
    return Object.values(list).filter(item=>{
        return item?.name?.toLowerCase()?.includes(text?.toLowerCase());
    })
}

const MenuBody = ({ items, widgets }) => {
  const [getCategory, setCategory] = useState("Recommended");
  const [getCount, setCount] = useState(10);
  const [searchMenuTxt, SetMenuTxt] = useState('');
  const [getMenuListItems, setMenuListItems] = useState(items);
  return (
    <>
      <div className="search-menu-div">
        <input
          type="text"
          name="searchMenuTxt"
          placeholder="Search for dishes.."
          value={searchMenuTxt}
          onChange={(e)=>{SetMenuTxt(e.target.value)}}
        />
        <button onClick={()=>{
            const filterItems = searchMenu(searchMenuTxt, items);
            setMenuListItems(filterItems);
        }}>Search</button>
      </div>

      <div className="menu-body">
        <div className="recomended">
          {Object.values(widgets).map((item, index) => {
            if (item?.type != "reorder") {
              return (
                <div
                  key={index}
                  data-type={item?.name}
                  data-id={item?.id}
                  className="menu-rec-lists"
                  onClick={(e) => {
                    setCategory(e.target.getAttribute("data-type"));
                    if (getCategory == "Recommended") {
                      setCount(
                        Object.values(getMenuListItems).filter((item) => {
                          return item.recommended == 1;
                        }).length
                      );
                    } else {
                      setCount(
                        Object.values(getMenuListItems).filter((item) => {
                          return item.category == getCategory;
                        }).length
                      );
                    }
                    setMenuListItems(items);
                  }}
                >
                  {item?.name}
                </div>
              );
            }
        
          })}
        </div>

        <div className="menu-item-lists">
          <div key={"selected_cat_menu"} className="selected_cat_menu">
            <h3>{getCategory}</h3>
            <h5>{getCount} ITEMS</h5>
          </div>
          {Object.values(getMenuListItems).map((item) => {
            if (item.category === getCategory)
              return <MenuCard {...item} key={item.id} />;
            else if (getCategory == "Recommended" && item.recommended == 1) {
              return <MenuCard {...item} key={item.id} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default MenuBody;
