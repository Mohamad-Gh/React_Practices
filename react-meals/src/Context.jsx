import React, { createContext, useContext, useEffect } from "react";
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

const fetchMeals = async (url) => {
  try {
    const { data } = await axios(url);
    console.log(data);
  } catch (error) {
    console.log("error:", error.response);
  }
};
function AppProvider({ children }) {
  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);
  return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
