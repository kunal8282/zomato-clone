import DeliveryPage from "./DeliveryPage";
import { Link, Outlet } from "react-router-dom";

const TabIndex = () => {
  return (
    <>
      <nav className="border-b my-4 py-4 px-2">
        <ul className="flex gap-10">
          <li className="text-xl cursor-pointer">
            {" "}
            <Link to={"/"}>
              {" "}
              <img
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
                alt=""
                className="w-8 inline mx-3"
              />
              Delivery
            </Link>
          </li>
          <li className="text-xl cursor-pointer">
            <Link to={"/diningout"}>
              {" "}
              <img
                src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
                alt=""
                className="w-8 inline mx-3"
              />
              Dining Out
            </Link>
          </li>
          <li className="text-xl cursor-pointer">
            <Link to={"/nightlife"}>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
                alt=""
                className="w-8 inline mx-3"
              />
              NightLife
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default TabIndex;
