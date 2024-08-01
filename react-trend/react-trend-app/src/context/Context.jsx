import React, { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList")?.split(",") || ["GOOGL", "MSFT", "AMZN"]
  );
  console.log(localStorage.getItem("watchList"));
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.getItem("watchList", watchList);
  }, [watchList]);

  const addStock = (stock) => {
    if (watchList.includes(stock)) {
      return;
    }
    setWatchList([...watchList, stock]);
  };
  const deleteStock = (stock) => {
    setWatchList(watchList.filter((element) => element !== stock));
  };

  return (
    <AppContext.Provider
      value={{ watchList, addStock, deleteStock, search, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider, AppContext };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
