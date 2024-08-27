import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../Apis/Axios";

const AppContext = createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [term, setTerm] = useState("");

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
      value={{ meals, loading, error, setTerm, fetchRandomMeal }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
