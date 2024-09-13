import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../Apis/Axios";

const AppContext = createContext();

function AppProvider({ children }) {
  // setting dark mode
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const [darkModeTheme, setDarkModeTheme] = useState(
    prefersDarkScheme.matches ? "dark" : "light"
  );

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
  //list of cards item
  const [currentOrder, setCurrentOrder] = useState([]);

  // Setting the price of the current order
  const [price, setPrice] = useState(0);

  // add to favorite list
  const addFavorite = (id) => {
    const newFavorite = meals.find((meal) => meal.idMeal === id);
    const favoriteCheck = favorites.some((meal) => meal.idMeal === id);
    // const favoriteCheck = favorites.find((meal) => meal.idMeal === id);

    // check to see if user has already added the meal to the favorite

    if (favoriteCheck) return;
    setFavorites((prvs) => [...prvs, newFavorite]);
  };

  // check the item and add it to the current order
  // If double clicked it will add to the quantity of that item.
  const order = (id) => {
    const cardItem = meals.find((meal) => meal.idMeal === id);

    setCurrentOrder((prevOrder) => {
      const index = prevOrder.findIndex((item) => item.idMeal === id);

      if (index !== -1) {
        //item exists, update quantity
        const updatedItem = {
          ...prevOrder[index],
          orderQuantity: prevOrder[index].orderQuantity + 1,
        };
        return [
          // cut the array and put the updated version instead
          ...prevOrder.slice(0, index),
          updatedItem,
          ...prevOrder.slice(index + 1),
        ];
      } else {
        // add the new item with quantity of 1
        return [...prevOrder, { ...cardItem, orderQuantity: 1 }];
      }
    });
  };

  // remove items from current order

  const removeOrder = (id) => {
    const newOrder = currentOrder.filter((item) => item.idMeal !== id);
    setCurrentOrder(newOrder);
  };

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((item) => item.idMeal !== id);
    setFavorites(newFavorites);
  };

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    setPrice(currentOrder.length * 99.99);
  }, [currentOrder]);

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
      // search the term
      if (term !== "") {
        const { data } = await axios.get(`/search.php?s=${term}`);
        setMeals(data.meals);
        setLoading(false);
      } else {
        // load everything
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
        order,
        currentOrder,
        darkModeTheme,
        setDarkModeTheme,
        removeOrder,
        price,
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
