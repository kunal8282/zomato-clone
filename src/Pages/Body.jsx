import FilterBox from "../Components/Filterbox";

const Body = () => {
  return (
    <>
      {/**
       * CateorgyComponents
       *  - Delivery
       *  - Dining Out
       *  - Night Life
       *
       * Filter Bar
       * Restaurant List
       *  - restaurant Cards
       */}

      <nav className="border-b mt-4 py-4 px-2">
        <ul className="flex gap-10">
          <li className="text-xl cursor-pointer">
            {" "}
            <img
              src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
              alt=""
              className="w-8 inline mx-3"
            />
            Delivery
          </li>
          <li className="text-xl cursor-pointer">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
              alt=""
              className="w-8 inline mx-3"
            />
            Dining Out
          </li>
          <li className="text-xl cursor-pointer">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
              alt=""
              className="w-8 inline mx-3"
            />
            NightLife
          </li>
        </ul>
      </nav>



      <div className="flex gap-2 mt-4">
        <FilterBox name={"Fitlers"}  />
        <FilterBox name = {"Cost $200 - Any"} />
        <FilterBox name = {"Rating: 4.0+"} />
        <FilterBox name = {"Cusinies"}>  </FilterBox>

      </div>
    </>
  );
};

export default Body;
