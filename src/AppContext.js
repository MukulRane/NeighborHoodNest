import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === 'y');

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };