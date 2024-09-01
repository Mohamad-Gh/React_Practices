import React from "react";
import { useGlobalContext } from "../Context/Context";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
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
      <aside className="py-3">
        <h2 className="py-4 px-4 font-bold">{title}</h2>
        <div className="">
          <img src={image} className="mx-auto w-[350px]" />
        </div>
        <div className="text-sm flex flex-col items-center w-[600px] mx-auto">
          <p>Cooking Instructions:</p>
          <p> {text}</p>
          <a href={source} className="px-5 self-start" target="">
            Original Source
          </a>
        </div>
      </aside>{" "}
      <Footer />
    </div>
  );
}

export default SelectedMeal;
