import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const RestaurantMenuCards = ({name, desc,display_price, item_image_thumb_url, rating, show_item_image}) => {
    return (
        <div className="flex gap-2 items-start py-5">
          { (show_item_image && item_image_thumb_url) ?  <div className="w-1/6">
                <img src= {item_image_thumb_url} alt="name" className="w-5/6 rounded-xl"/>
            </div> : <div className="w-2/12 bg-slate-300 h-32 text-center"><h1 className="m-10 font-light">No Image</h1></div>} 

            <div className="w-4/6 px-2">
                <h1 className="text-xl font-semibold">{name}</h1>
                {rating && <h2>{}</h2>}
                <h2 className="text-base"> <FontAwesomeIcon icon={solid("indian-rupee-sign")} /> {display_price}</h2>
                {desc !== "" && <p className="text-xs text">{desc.length >= 100 ? desc.slice(0,100) + "...." : desc}</p> }
            </div>

            <div className="px-2">
                <button className="border px-4 py-2 rounded-lg">Cart</button>
            </div>
        </div>
    )
}

export default RestaurantMenuCards;