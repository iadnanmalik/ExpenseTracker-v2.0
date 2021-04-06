import React from 'react';
import './App.css';
import { Header } from './Components/Header'
import { Balance } from './Components/Balance';
import { AccountSummary } from './Components/AccountSummary';
import { TransactionHistory } from './Components/TransactionHistory';
import { AddTransaction } from './Components/AddTransaction';
import  {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
  <Header></Header>
  <div className="Container">

  
  <Balance></Balance>
  <AccountSummary></AccountSummary>
  <TransactionHistory></TransactionHistory>
  <AddTransaction></AddTransaction>
  </div>
    </GlobalProvider>
  );
}

export default App;
