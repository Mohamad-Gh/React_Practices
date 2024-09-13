import React from "react";
import { useGlobalContext } from "../Context/Context";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Favorite from "../components/Favorites/Favorites";
function Order() {
  const { currentOrder } = useGlobalContext();
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Favorite />
      <ShoppingCart />
      <Footer />
    </div>
  );
}

export default Order;
