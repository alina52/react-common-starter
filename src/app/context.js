/*
 * @Author: Chenyu Wang
 * @LastEditors: Chenyu Wang
 * @email: chenyu.wang96@outlook.com
 * @github: https://github.com/alina52
 * @Date: 2021-10-29 11:46:35
 * @LastEditTime: 2021-10-29 13:06:23
 */
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
