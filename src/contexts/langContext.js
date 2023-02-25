import { createContext } from "react";
import { useState } from "react";

export const LanguagesContext = createContext();
export const LanguagesContextProvider = (props) => {
  const [selectedScript, setSelectedScript] = useState("latin");

  return (
    <LanguagesContext.Provider
      value={{
        selectedScript,
        setSelectedScript,
      }}
    >
      {props.children}
    </LanguagesContext.Provider>
  );
};
