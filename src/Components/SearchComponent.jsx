import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";


const SearchComponent = () => {
    return (
        <div className="flex border p-3 rounded-lg shadow-md">
             <div className="w-56">
              <FontAwesomeIcon
                icon={solid("location-dot")}
                size="lg"
                style={{ color: "#f72262" }}
              />
              <span className="px-2">Delhi</span>
            </div>

            <div className="border-l px-2">
              <FontAwesomeIcon icon={solid("magnifying-glass")} size="lg" />
              <input
                type="text"
                placeholder="Search for restaurant, cusinie or dish"
                className="px-4 w-96 outline-none "
              />
            </div>
        </div>
    )

}

export default SearchComponent;