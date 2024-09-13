import React, { useState } from "react";
import ShoopingCartItem from "./ShoopingCartItem";
import OrderSummary from "./OrderSummary";
import { useGlobalContext } from "../../Context/Context";
import { Link } from "react-router-dom";

import ShoppingSuggestions from "./ShoppingSuggestions";

function ShoppingCart() {
  const { currentOrder, price } = useGlobalContext();
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {/* shopping carts */}
              {currentOrder.length > 0 ? (
                currentOrder.map((item) => {
                  const {
                    idMeal: id,
                    orderQuantity: quantity,
                    strMeal: title,
                    strMealThumb: image,
                  } = item;
                  return (
                    <ShoopingCartItem
                      key={id}
                      id={id}
                      title={title}
                      price={99.99}
                      quantity={quantity}
                      image={image}
                    />
                  );
                  {
                  }
                })
              ) : (
                <div>
                  <h2>No Order Found</h2>
                  <p>
                    Our Meals Are{" "}
                    <Link to="/Foods">
                      <span className="text-primary hover:font-bold duration-300">
                        Here
                      </span>
                    </Link>
                  </p>
                </div>
              )}
            </div>
            <ShoppingSuggestions />
          </div>
          <OrderSummary price={price} />
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
