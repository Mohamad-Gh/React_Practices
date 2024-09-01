import React from "react";
import { useGlobalContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const navigate = useNavigate();
  const { favorites, removeFavorite, setSelectedMeal } = useGlobalContext();
  return (
    <section className="favorites dark:bg-gray-700 dark:text-white">
      <div className="favorites-content">
        <h5 className="pb-2">Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image, strMeal: title } = item;
            return (
              <div key={idMeal} className="favorite-item">
                <img
                  src={image}
                  className="favorites-img img"
                  onClick={() => {
                    setSelectedMeal(idMeal);
                    navigate(`${title}`);
                  }}
                />
                <button
                  className="remove-btn dark:text-primary"
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
