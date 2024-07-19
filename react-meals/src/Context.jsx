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

function AppProvider({ children }) {
  const [isLoading, setLoading] = useState(true);
  const [meal, setMeal] = useState([]);
  const [searchTerm, setTerm] = useState("");

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
    <AppContext.Provider value={{ meal, isLoading, setTerm, fetchRandomMeal }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
