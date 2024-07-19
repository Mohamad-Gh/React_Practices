import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import { FaRegThumbsUp } from "react-icons/fa6";

function Meals() {
  const { meal, isLoading } = useGlobalContext();
  return isLoading ? (
    <section className="section">
      <h4>Loading ...</h4>
    </section>
  ) : meal.length < 1 ? (
    <section className="section">
      <h4>No Item was Founded</h4>
    </section>
  ) : (
    <section className="section-center">
      {meal.meals.map(({ idMeal, strMeal: title, strMealThumb: image }) => {
        {
          /* const { idMeal, strMeal: title, strMealThumb: image } = singleMeal; */
        }
        return (
          <article key={idMeal} className="single-meal">
            <img src={image} style={{ width: "200px" }} className="img" />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">
                <FaRegThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}

export default Meals;
