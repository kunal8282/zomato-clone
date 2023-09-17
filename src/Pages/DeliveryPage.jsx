import RestaurantList from '../Components/RestaurantList.jsx';

import { ZOMATO_API } from "../utils/Constant";


const DeliveryPage = () => {

  return (
    <>
      <RestaurantList DATA_API={ZOMATO_API} />
    </>
  );
};

export default DeliveryPage;
