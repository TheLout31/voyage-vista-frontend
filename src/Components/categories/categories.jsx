import { useEffect, useState } from "react";
import axios from "axios";
import "./categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategoriesToShow, setCategoriesToShow] = useState(0);

  const handleRightClick = () => {
    setCategoriesToShow((prev) => prev + 12);
  };
  const handleLeftClick = () => {
    setCategoriesToShow((prev) => prev - 12);
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://rich-teal-dog-kit.cyclic.app/api/category");
        const categoriesToShow = data.slice(
          numberOfCategoriesToShow,
          numberOfCategoriesToShow + 12
        );
        setCategories(categoriesToShow);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [numberOfCategoriesToShow]);

  return (
    <section className="categories gap-large ">
      <button className="left-button" onClick={handleLeftClick}>
        <span class="material-symbols-outlined">arrow_back_ios</span>
      </button>
      {categories &&
        categories.map(({ category }) => (
          <p className="span-text" key={category._id}>
            {category}
          </p>
        ))}
      <button className="left-button" onClick={handleRightClick}>
        <span class="material-symbols-outlined">arrow_forward_ios</span>
      </button>
    </section>
  );
};
