import React from "react";
import { useGlobalContext } from "../../Context/Context";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
function SelectedMeal() {
  const { meals, selectedMeal } = useGlobalContext();

  const filtered = meals.filter((element) => element.idMeal == selectedMeal);
  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = filtered[0];
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <aside className="">
        <h2 className="py-4 px-4 font-bold">{title}</h2>
        <div className="">
          <img src={image} className="" />
        </div>
        <div className="">
          <p>Cooking Instructions:</p>
          <p> {text}</p>
          <a href={source} target="">
            Original Source
          </a>
        </div>
      </aside>{" "}
      <Footer />
    </div>
  );
}

export default SelectedMeal;
