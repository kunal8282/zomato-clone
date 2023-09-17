import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import RestaurantMenuCards from "./RestaurantMenuCards";
import CategoriesComponent from "./CategoriesComponent";
import SideMenuComponet from "./SideMenuComponet";

const MenuComponent = ({navbarSection, orderDetails, order }) => {
  return (
    <div className="mt-5 flex items-start ">
      
      <SideMenuComponet data = {navbarSection[1].children}/>

      <div className="w-full border-l px-5">
        <div className="flex justify-between items-start ">
          <div>
            <h1 className="text-3xl">Order Online</h1>
            <p className="py-2 font-light">
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={regular("compass")}
                  style={{ fontWeight: "200" }}
                />{" "}
                {orderDetails?.trackingText}{" "}
              </span>{" "}
              |
              <span className="px-1">
                <FontAwesomeIcon
                  icon={regular("clock")}
                  style={{ fontWeight: "200" }}
                />{" "}
                {orderDetails?.deliveryTime}
              </span>
            </p>
          </div>

          <div className="border py-2 px-4 outline-slate-200 rounded focus:border-blue-400">
            <FontAwesomeIcon
              icon={solid("magnifying-glass")}
              style={{ color: "gray", fontWeight: "lighter" }}
            />
            <input
              type="text"
              placeholder="Search within menu "
              className="outline-none px-2 text-lg"
            />
            <FontAwesomeIcon
              icon={solid("xmark")}
              style={{ color: "gray", fontWeight: "lighter", fontSize: "12px" }}
            />
          </div>
        </div>

        {order?.menuList?.menus.map((element) => (
          <div key={element?.menu?.id}>
            {element?.menu?.name && (
              <h1 className="text-2xl font-bold">{element?.menu?.name}</h1>
            )}
            <CategoriesComponent {...element?.menu} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
