import React, {createContext, useReducer} from 'react';

import AppReducer from './AppReducer';


const initialState ={
    transactions: [
        {id: 1, description:"Flower", transactionAmount:500},
        {id: 2, description:"Car", transactionAmount:300},
        {id: 3, description:"Bike", transactionAmount:-100},
        {id: 4, description:"Book", transactionAmount:100},
        {id: 5, description:"Mobile", transactionAmount:-200},
    
    ]
}
export const GlobalContext = createContext(initialState);


export const GlobalProvider =({children}) =>{

    const [state,dispatch]= useReducer(AppReducer, initialState);

    //Actions 
    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })

    }

    return (
        <GlobalContext.Provider value={{transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }
        }>
            {children}
        </GlobalContext.Provider>
    )

}