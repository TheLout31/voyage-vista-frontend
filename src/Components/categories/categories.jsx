import { useEffect, useState } from "react";
import axios from "axios";
import "./categories.css";
import { useCategory } from "../../Context";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategoriesToShow, setCategoriesToShow] = useState(0);
  const { hotelCategory, setHotelCategory } = useCategory();

  const handleRightClick = () => {
    setCategoriesToShow((prev) => prev + 12);
  };
  const handleLeftClick = () => {
    setCategoriesToShow((prev) => prev - 12);
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://rich-teal-dog-kit.cyclic.app/api/category"
        );
        const categoriesToShow = data.slice(
          numberOfCategoriesToShow,
          numberOfCategoriesToShow + 12
        );
        setCategories(categoriesToShow);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [numberOfCategoriesToShow]);

  const handleCategoryclick = (category) => {
    setHotelCategory(category);
    
  };

  return (
    <section className="categories gap-large ">
      <button className="left-button" onClick={handleLeftClick}>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
      {categories &&
        categories.map(({ category }) => (
          <span
            className={`${
              category == hotelCategory ? "border-bottom" : "span-text bellota-text-regular"
            }`}
            key={category._id}
            onClick={() => handleCategoryclick(category)}
          >
            {category}
          </span>
        ))}
      <button className="left-button" onClick={handleRightClick}>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>
    </section>
  );
};
