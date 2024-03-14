import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    return (
      <div
        className="res-card"
        style={{
          backgroundColor: "lightgray",
        }}
      >
        <img
          className="res-logo"
          alt="Food"
          src={
            CDN_URL +
            resData.info.cloudinaryImageId
          }
        />
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRatingString} stars</h4>
        <h4>{resData.info.sla.slaString}</h4>
      </div>
    );
  };

  export default RestaurantCard;