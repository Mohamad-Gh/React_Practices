import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../Apis/Axios";

const AppContext = createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/search.php?s=");
        setMeals(data.meals);
        setLoading(false);
      } catch (error) {}
      setLoading(false);
      setError(error);
    };
    fetchMeals();
  }, []);

  return (
    <AppContext.Provider value={{ meals, loading, error }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
