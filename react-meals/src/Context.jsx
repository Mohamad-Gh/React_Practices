import React, { createContext, useContext } from "react";
const AppContext = createContext();

function AppProvider({ children }) {
  return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
