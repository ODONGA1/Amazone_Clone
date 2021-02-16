import React, { createContext, useContext, useReducer } from "react";

// prepares the datalayer
export const StateContext = createContext();

//Wrap our app and provide the data layer to every component of the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull the information from the data layer
export const useStateValue = () => useContext(StateContext);
