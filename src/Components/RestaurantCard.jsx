import { RESTAURANT_IMG_URL } from "../utils/Constant"

const RestaurantCard = ({name,  cloudinaryImageId, avgRating, cuisines, slaString}) => {
    return (
        <div className="border p-2">
            <img src={RESTAURANT_IMG_URL+cloudinaryImageId} alt={name} className="rounded w-80"/>

            <div className="text-center py-2">
                <h1 className="text-xl font-semibold">{name.length > 20 ? `${name.slice(0,20)}..` : name}</h1>
                <p>{avgRating} Rating</p>
                <p>{cuisines.slice(0,3).join(' ,')}</p>
                <p>{slaString}</p>
            </div>
        </div>
    )
}

export default RestaurantCard