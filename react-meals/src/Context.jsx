import React, { createContext, useContext, useEffect } from "react";
const AppContext = createContext();

const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

function AppProvider({ children }) {
  useEffect(() => {
    fetchData();
  }, []);
  return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
