import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FilterBox from "./Filterbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";


const RestaurantList = ({ DATA_API }) => {
  const [RestaurantData, setRestaurantData] = useState(DATA_API);
  const [fitler, setFitler] = useState(0);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.scrollY > 200));
    }
  }, []);

  const applyFilter = (category) => {
    setFitler(fitler + 1);
  };

  const removeFilter = () => {
    setFitler(fitler - 1);
  };

  return (
    <>
      <div
        className={`flex gap-3 items-center bg-white ${
          small && "fixed top-0 h-[13vh] w-full mt-0"
        }`}
      >
        <button className="border py-2 px-3 rounded-md text-slate-400">
          {fitler > 0 ? (
            <span className="font-semibold bg-red-600 px-2 py-1 rounded text-white">
              {fitler}
            </span>
          ) : (
            <FontAwesomeIcon icon={solid("sliders")} />
          )}
          <span className="px-2">Filter</span>
        </button>

        <FilterBox
          name={"Rating 4.0"}
          applyFitler={applyFilter}
          removeFilter={removeFilter}
        />
        <FilterBox
          name={"Rating : High to Low"}
          applyFitler={applyFilter}
          removeFilter={removeFilter}
        />
        <FilterBox
          name={"Cost $150 - $300"}
          applyFitler={applyFilter}
          removeFilter={removeFilter}
        />
      </div>

      <div className="my-5">
        <h1 className="text-3xl font-semibold">Best Food in Mumbai</h1>

        <div className="flex flex-wrap gap-12 my-10">
            {RestaurantData.map((element) => (<Link to={"/restaurant" + element?.cardAction?.clickUrl} key={element?.info?.resId}><RestaurantCard {...element} /></Link>))}
        </div>
      </div>
    </>
  );
};

export default RestaurantList;
