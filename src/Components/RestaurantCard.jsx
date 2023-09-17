const RestaurantCard = ({ info, order, bottomContainers }) => {
  const cuisineString = info?.cuisine.map((element) => {
    return element.name;
  }).join(', ')

  return (
    <div className="w-80">
      <div className="max-w-full h-52 overflow-hidden">
        <img src={info?.image?.url} alt={info?.name} className="rounded-2xl w-80 h-full object-cover" />
      </div>

      <div className="flex justify-between py-1">
        <div className="text-lg font-semibold">{info?.name.length >= 20 ? info?.name.slice(0, 20) + "...": info?.name}</div>

         {/* Fix bg-[variable_name] */}
        <div className={`bg-green-600 text-center text-white font-bold px-3 rounded`}>
          {info?.rating?.aggregate_rating}
        </div>
      </div>

      <div className="flex justify-between mb-4">
        <div className="font-extralight">{cuisineString.length >= 20 ? cuisineString.slice(0,20) + "...." : cuisineString }</div>
        <div className="font-extralight">{order?.deliveryTime}</div>
      </div>

      {bottomContainers.length !== 0&& <div className="flex py-4 flex-1 border-t">
            <img src={bottomContainers[0]?.image?.url} alt="" className="w-10 "/>
           <span className="font-thin text-xs mx-1 ">{bottomContainers[0]?.text}</span> 
      </div>}
    </div>
  );
};

export default RestaurantCard;
