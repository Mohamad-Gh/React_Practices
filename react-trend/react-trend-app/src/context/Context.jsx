import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(["IBM"]);
  const [search, setSearch] = useState("");

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
