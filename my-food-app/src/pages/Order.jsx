import React from "react";
import { useGlobalContext } from "../Context/Context";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
function Order() {
  const { currentOrder } = useGlobalContext();
  console.log(currentOrder);
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      {}
      {currentOrder?.map((element, indx) => {
        return (
          <div key={indx}>
            <h2>{element.idMeal}</h2>
            <p>{element.orderQuantity}</p>
          </div>
        );
      })}
      <ShoppingCart />
      <Footer />
    </div>
  );
}

export default Order;
