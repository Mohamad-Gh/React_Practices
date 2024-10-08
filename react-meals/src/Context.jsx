import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
const AppContext = createContext();

// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
//     );
//     const allMealsUrl = await response.json();
//     console.log("search", allMealsUrl.meals[0]);
//     const randomResponse = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/random.php"
//     );
//     const randomMealUrl = await randomResponse.json();
//     console.log("random", randomMealUrl.meals[0]);
//   } catch (error) {
//     console.log(error);
//   }
// };
const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem("favorites"));
  } else {
    favorites = [];
  }
  return favorites;
};

function AppProvider({ children }) {
  const [isLoading, setLoading] = useState(true);
  const [meal, setMeal] = useState([]);
  const [searchTerm, setTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

  const addFavorite = (id) => {
    const alreadyFavorite = favorites.find((element) => element.idMeal == id);
    if (alreadyFavorite) return;
    const newMeal = meal.meals.find((element) => element.idMeal == id);
    const updatedFavorite = [...favorites, newMeal];
    setFavorites(updatedFavorite);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorite));
  };

  const removeFavorites = (id) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const selectMeal = (idMeal, favoriteMeal) => {
    let newMeal;
    if (favoriteMeal) {
      newMeal = favorites.find((meal) => meal.idMeal === idMeal);
    } else {
      newMeal = meal.meals.find((meal) => meal.idMeal === idMeal);
    }
    setSelectedMeal(newMeal);
    setShowModal(true);
  };

  const closeMeal = () => {
    setShowModal(false);
  };

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const response = await axios(url);
      response.data.meals ? setMeal(response.data) : setMeal([]);
    } catch (error) {
      console.log("error:", error.response);
    }
    setLoading(false);
  };

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl);
  };
  useEffect(() => {
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        meal,
        isLoading,
        setTerm,
        fetchRandomMeal,
        showModal,
        selectMeal,
        selectedMeal,
        closeMeal,
        addFavorite,
        favorites,
        removeFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
