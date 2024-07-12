import React from "react";
import { useGlobalContext } from "../Context";

function Favorites() {
  const context = useGlobalContext();
  console.log(context);
  return <h2>Favorites</h2>;
}

export default Favorites;
