import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";

const FilterBox = ({ name, applyFitler, removeFilter, cateogry }) => {
  const [activeFilter, setactiveFitler] = useState(false);



  const filterFunction = () => {
    if (activeFilter) {
      setactiveFitler(false);
      removeFilter();
    } else {
      setactiveFitler(true);
      applyFitler();
    }
  };

  return (
    <button
      className={`border py-2 px-3 rounded-md cursor-pointer ${
        activeFilter ? `bg-red-700 text-white` : `text-slate-400`
      } `}
      onClick={(cateogry) => {filterFunction(cateogry)}}
    >
      <span className="px-2">{name}</span>
      {activeFilter && (
        <span>
          {" "}
          <FontAwesomeIcon icon={solid("xmark")} />{" "}
        </span>
      )}
    </button>
  );
};

export default FilterBox;
