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
        <h2 className="py-4 font-bold text-center text-xl">{title}</h2>
        <div className="">
          <img src={image} className="mx-auto p-2 w-[350px] shadow-md" />
        </div>
        <div className="p-1 text-sm flex flex-col items-center w-[600px] mx-auto">
          <p className="p-4 font-bold">Cooking Instructions:</p>
          <p> {text}</p>
          <a
            href={source}
            className="px-5 self-start text-blue-700 dark:text-blue-400 duration-200"
            target=""
          >
            Original Source
          </a>
        </div>
      </aside>{" "}
      <Footer />
    </div>
  );
}

export default SelectedMeal;
