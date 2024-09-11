import React from "react";
import { useGlobalContext } from "../Context/Context";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
function Order() {
  const { currentOrder } = useGlobalContext();
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <ShoppingCart />
      <Footer />
    </div>
  );
}

export default Order;
