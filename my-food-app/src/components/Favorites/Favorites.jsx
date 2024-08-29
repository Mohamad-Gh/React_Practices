import React from "react";
import { useGlobalContext } from "../../Context/Context";

function Favorites() {
  const { favorites, removeFavorite } = useGlobalContext();
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image } = item;
            return (
              <div key={idMeal} className="favorite-item">
                <img
                  src={image}
                  className="favorites-img img"
                  //   onClick={() => selectMeal(idMeal, true)}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeFavorite(idMeal)}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Favorites;
