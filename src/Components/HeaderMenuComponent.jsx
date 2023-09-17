import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderMenuComponent = ({
  name,
  cuisine_string,
  rating_new,
  isHideonHeaderFixed,
}) => {
  return (
    <>
      <div className={`flex justify-between items-start`}>
        <div>
          <h1 className="text-3xl font-semibold pb-2">{name}</h1>
          <h2 className="text-lg font-light">{cuisine_string}</h2>
          {!isHideonHeaderFixed && (
            <div className="flex gap-3 my-4">
              <button className="border border-slate-500 px-2 py-1 rounded-lg hover:bg-slate-50">
                <FontAwesomeIcon
                  icon={solid("diamond-turn-right")}
                  style={{ color: "red" }}
                />{" "}
                Direction
              </button>
              <button className="border border-slate-500 px-2 py-1 rounded-lg hover:bg-slate-50">
                <FontAwesomeIcon
                  icon={regular("bookmark")}
                  style={{ color: "red" }}
                />{" "}
                Bookmark
              </button>
              <button className="border border-slate-500 px-2 py-1 rounded-lg hover:bg-slate-50">
                <FontAwesomeIcon
                  icon={solid("share")}
                  style={{ color: "red" }}
                />{" "}
                Share
              </button>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex items-center">
            <div className="bg-slate-400 px-2 py-1 text-white rounded-lg text-sm">
              <span>{rating_new?.ratings?.DINING?.ratingV2}</span>{" "}
              <FontAwesomeIcon
                icon={solid("star")}
                style={{ color: "white" }}
              />
            </div>
            <div className="text-xs text-left px-2">
              <p className="font-bold">
                {rating_new?.ratings?.DINING?.reviewCount}
              </p>{" "}
              <p className="border-b border-dotted">
                {rating_new?.ratings?.DINING?.sideSubTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div
              className={`bg-green-700 px-2 py-1 text-white rounded-lg text-sm`}
            >
              <span>{rating_new?.ratings?.DELIVERY?.ratingV2}</span>{" "}
              <FontAwesomeIcon
                icon={solid("star")}
                style={{ color: "white" }}
              />
            </div>
            <div className="text-xs text-left px-2">
              <p className="font-bold">
                {rating_new?.ratings?.DELIVERY?.reviewCount}
              </p>{" "}
              <p className="border-b border-dotted">
                {rating_new?.ratings?.DELIVERY?.sideSubTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMenuComponent;
