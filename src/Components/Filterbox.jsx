import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const FilterBox = ({name}) => {
  return (
    <div className="border py-2 px-3 rounded-md text-slate-400">
        {name === "Fitlers" && <FontAwesomeIcon icon={solid("sliders")} /> }
        <span className="px-2">{name}</span>
    </div>
  )
}

export default FilterBox;