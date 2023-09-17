import HeaderMenuComponent from "../Components/HeaderMenuComponent";
import MenuComponent from "../Components/MenuComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../Components/ShimmerComponent";


const RestaurantMenuPage = () => {
  const [MenuData, setMenuData] = useState({});
  const [isLoad, setisLoad] = useState(false);
  const [isActive, setisActive] = useState("Order Online");

  const {id} = useParams()
  console.log(id);

  const fetchData = async () => {
    const dataURL = await fetch(`https://www.zomato.com/webroutes/getPage?page_url=/mumbai/${id}/order&location=&isMobile=0`);
    const dataJSON = await dataURL.json();
    return dataJSON;
  };

  useEffect(() => {
    fetchData().then((data) => {
      setMenuData(data);
      setisLoad(true);
    });
  }, []);


  return !isLoad ? (
    <Shimmer />
  ) : (
    <>
    <div className="sticky top-0 bg-white my-3 py-3">
      <HeaderMenuComponent
        {...MenuData.page_data?.sections?.SECTION_BASIC_INFO}
      />

      <div className="flex gap-5 px-2 text-xl mt-5 border-b-2 pb-2">
        <button className="px-4 py-2">Overview</button>
        <button
          className={`${
            isActive == `Order Online` && "text-red-500 "
          } px-4 py-2 `}
        >
          Order Online
        </button>
        <button className="px-4 py-2">Photos</button>
      </div>
    </div>

    <div>
      <MenuComponent {...MenuData?.page_data}/>
    </div>

    </>
  );
};

export default RestaurantMenuPage;
