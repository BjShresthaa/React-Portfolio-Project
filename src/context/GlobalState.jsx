import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -200 },
    { id: 2, text: "Salary", amount: 20000 },
    { id: 3, text: "Book", amount: -1500 },
    { id: 4, text: "Snacks", amount: -1000 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
