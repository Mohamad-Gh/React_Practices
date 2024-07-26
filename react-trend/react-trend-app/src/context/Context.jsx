import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  const addStock = (event) => {
    const selected = event.target.id;

    if (watchList.includes(selected)) {
      return;
    }
    setWatchList([...watchList, selected]);
  };
  const deleteStock = (stock) => {
    setWatchList(watchList.filter((element) => element !== stock));
  };

  return (
    <AppContext.Provider value={{ watchList, addStock, deleteStock }}>
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider, AppContext };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
