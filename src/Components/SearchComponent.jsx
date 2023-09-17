import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";


const SearchComponent = () => {
    const [searchText, setSearchText] = useState("")

    return (
        <div className="flex border p-3 rounded-lg shadow-md">
             <div className="w-56">
              <FontAwesomeIcon
                icon={solid("location-dot")}
                size="lg"
                style={{ color: "#f72262" }}
              />
              <span className="px-2">Mumbai</span>
            </div>

            <div className="border-l px-2">
              <FontAwesomeIcon icon={solid("magnifying-glass")} size="lg" />
              <input
                type="text"
                placeholder="Search for restaurant, cusinie or dish"
                className="px-4 w-96 outline-none "
                value={searchText}
                onInput={(event) => {
                  setSearchText(event.target.value)
                }}
              />
            </div>
        </div>
    )

}

export default SearchComponent;