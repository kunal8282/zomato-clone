import { useEffect, useState } from 'react';
import FilterBox from '../Components/Filterbox.jsx'
import RestaurantList from '../Components/RestaurantList.jsx';

const DeliveryPage = () => {

    const [small , setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
              setSmall(window.scrollY > 200)
            );
          }
    }, [])


  return (
    <>
      <div className={`flex gap-3 items-center bg-white ${small && "fixed top-0 h-[13vh] w-full mt-0"}`}>
        <FilterBox name={"Fitlers"} />
        <FilterBox name={"Cost $200 - Any"} />
        <FilterBox name={"Rating: 4.0+"} />
        <FilterBox name={"Cusinies"}> </FilterBox>
      </div>


      <RestaurantList />
    </>
  );
};

export default DeliveryPage;
