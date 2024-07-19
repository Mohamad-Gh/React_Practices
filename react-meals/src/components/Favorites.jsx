import React from "react";
import { useGlobalContext } from "../Context";

function Favorites() {
  const { favorites } = useGlobalContext();
  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = favorites;
  return <h2>{image}</h2>;
}

export default Favorites;
