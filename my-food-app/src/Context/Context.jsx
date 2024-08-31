import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../Apis/Axios";

const AppContext = createContext();

function AppProvider({ children }) {
  // checking page loading
  const [loading, setLoading] = useState(false);
  // getting the meals list from API
  const [meals, setMeals] = useState([]);
  // error statement
  const [error, setError] = useState(null);
  // search term to look in meals list
  const [term, setTerm] = useState("");
  // meal that is selected by user to read more about or order
  const [selectedMeal, setSelectedMeal] = useState(null);
  // List of user favorite meals
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favoriteList")) || []
  );

  const addFavorite = (id) => {
    const newFavorite = meals.find((meal) => meal.idMeal === id);
    const updatedFavorite = favorites.find((meal) => meal.idMeal === id);

    if (updatedFavorite) return;
    // check to see if user has already added the meal to the favorite
    // if (!favorites.include(newFavorite)) {
    setFavorites((prvs) => [...prvs, newFavorite]);
    // } else return;
  };

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((item) => item.idMeal !== id);
    setFavorites(newFavorites);
  };

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favorites));
    // console.log(
    //   "localstorage in context",
    //   JSON.parse(localStorage.getItem("favoriteList"))
    // );
  }, [favorites]);

  // console.log(
  //   "localstorage in context",
  //   JSON.parse(localStorage.getItem("favoriteList"))
  // );

  const fetchRandomMeal = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/random.php`);
      setMeals(data.meals);
      setLoading(false);
    } catch (error) {}
    setLoading(false);
    setError(error);
  };
  // useEffect(() => {
  //   if (!term) {
  //     fetchRandomMeal();
  //   }
  // }, []);

  const fetchMeals = async () => {
    setLoading(true);
    try {
      if (term !== "") {
        const { data } = await axios.get(`/search.php?s=${term}`);
        setMeals(data.meals);
        setLoading(false);
      } else {
        const { data } = await axios.get(`/search.php?s=`);
        setMeals(data.meals);
        setLoading(false);
      }
    } catch (error) {}
    setLoading(false);
    setError(error);
  };

  useEffect(() => {
    fetchMeals(term);
  }, []);

  useEffect(() => {
    if (!term) return;
    fetchMeals(term);
  }, [term]);

  return (
    <AppContext.Provider
      value={{
        meals,
        loading,
        error,
        setTerm,
        fetchRandomMeal,
        selectedMeal,
        setSelectedMeal,
        favorites,
        addFavorite,
        removeFavorite,
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
