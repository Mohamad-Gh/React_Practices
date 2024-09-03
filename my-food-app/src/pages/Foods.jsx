import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Meals from "../components/Meals/Meals";
import Search from "../components/Search/Search";
import Favorites from "../components/Favorites/Favorites";
import { useGlobalContext } from "../Context/Context";

function Foods() {
  const { favorites } = useGlobalContext();
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      <Footer />
    </div>
  );
}

export default Foods;
