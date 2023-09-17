import RestaurantMenuCards from "./RestaurantMenuCards";

const Category = ({ category }) => {
  return (
    <>
      {category?.name !== "" && <h1 className="text-lg my-2 ">{category?.name}</h1>}
      {category?.items.map((element) => (
        <RestaurantMenuCards {...element.item} />
      ))}
    </>
  );
};

const CategoriesComponent = ({ categories }) => {
  return (
    <>
      {categories.map((element) => (
        <Category {...element} />
      ))}
    </>
  );
};

export default CategoriesComponent;
