import React, { createContext, useContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial State
const inistialState = {
  transaction: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};


// Create Context
export const GlobalContext = createContext(inistialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const[state, dispatch] = useReducer(AppReducer, inistialState);

    // Actions
    function deleteTransaction(id) {
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    }

    function addTransaction(transaction) {
      dispatch({
        type: 'CREATE_TRANSACTION',
        payload: transaction
      })
    }
    return (
    <GlobalContext.Provider value ={{
        transactions: state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    );
}