import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
const {transactions}= useContext(GlobalContext)
const amounts = transactions.map(transaction => transaction.transactionAmount);
const total = amounts.reduce((acc,item)=> (acc+=item),0).toFixed(2);
//console.log(total)
    return (
        <div>
             <h4>
                Current Balance
            </h4>
            <h1>
                ${total}
            </h1>
        </div>
    )
}
