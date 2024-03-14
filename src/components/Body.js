import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resListLocal, setResListLocal] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchList, SetSearchList] = useState("");

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const list = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await list.json();
    setResListLocal(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFiltered(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    )
  };

  const onSearch = () => {
    const filteredList = resListLocal.filter((res) => 
    res.info.name.toLowerCase().includes(searchList.toLowerCase())
    )

    setFiltered(filteredList)
    }

  return resListLocal.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            value={searchList}
            onChange={(e) => SetSearchList(e.target.value)}
          />
          <button onClick={onSearch}>Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            filteredLists = resListLocal.filter(
              (res) => res.info.avgRatingString > 4.5
            );
            setResListLocal(filteredLists);
          }}
        >
          Top Rated Restaurants
        </button>

        <div className="res-container">
          {filtered.map((resList) => (
            <RestaurantCard key={resList.info.id} resData={resList} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

// const Body = () => {
// const [resListLocal, setResListLocal] = useState([
//     {
//         info: {
//           id: "342060",
//           name: "Shri Anandhaas Veg",
//           cloudinaryImageId: "za7a3l3hvupyvz6jzzhq",
//           locality: "Perumbakkam",
//           costForTwo: "₹250 for two",
//           cuisines: ["North Indian", "South Indian", "Chinese", "Desserts"],
//           avgRatingString: "3.9",
//         }

//       },
//       {
//         info: {
//           id: "342061",
//           name: "KFC",
//           cloudinaryImageId: "za7a3l3hvupyvz6jzzhq",
//           costForTwo: "₹250 for two",
//           cuisines: ["North Indian", "South Indian", "Chinese", "Desserts"],
//           avgRatingString: "3.8",
//         }
//       },
//       {
//         info: {
//           id: "342062",
//           name: "Burger King",
//           cloudinaryImageId: "za7a3l3hvupyvz6jzzhq",
//           costForTwo: "₹250 for two",
//           cuisines: ["North Indian", "South Indian", "Chinese", "Desserts"],
//           avgRatingString: "4.3",
//         }
//       },
// ])

//     return (
//       <div className="body">
//         <div className="filter">
//         <button className="filter-btn"
//         onClick={ () => {
//            filteredList = resListLocal.filter((res) => res.info.avgRatingString > 4)
//            setResListLocal(filteredList)
//         }

//         }
//         >
//             Top Rated Restaurants
//             </button>
//         </div>
//          <div className="res-container">
//        {
//         resListLocal.map(
//           (restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
//         )
//        }
//         </div>
//       </div>
//     );
//   };
