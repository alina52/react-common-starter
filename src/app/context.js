import React, { createContext, useReducer } from "react";
import generalReducer from "src/app/reducer";

const GeneralContext = createContext({});

const GeneralProvider = ({ children }) => {
  const [state, dispatch] = useReducer(generalReducer, {});
  return (
    <GeneralContext.Provider value={{ state, dispatch }} > {children} </GeneralContext.Provider>
  );
};

export { GeneralProvider, GeneralContext };
