import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API_DATA } from "../utils/Constant";
import { useState } from "react";

const RestaurantList = () => {

    const [RestaurantData, setRestaurantData] = useState(RESTAURANT_API_DATA);

    return (
        <div className="my-5">
            <h1 className="text-3xl font-semibold">Best Food in Delhi NCR</h1>

            <div className="flex flex-wrap gap-6 my-10">
                {RestaurantData.map((element,index) => {
                    return <RestaurantCard {...element.data} keys={index}/>
                })}
            </div>
        </div>
    )
}

export default RestaurantList;