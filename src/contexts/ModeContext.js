import { createContext } from "react";
import { useState } from "react";

export const ModesContext = createContext();
export const ModesContextProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ModesContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {props.children}
    </ModesContext.Provider>
  );
};
