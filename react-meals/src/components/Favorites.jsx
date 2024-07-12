import React, { useContext } from "react";
import { AppContext } from "../Context";

function Favorites() {
  const context = useContext(AppContext);
  console.log(context);
  return <h2>Favorites</h2>;
}

export default Favorites;
