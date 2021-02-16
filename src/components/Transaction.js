import React, {useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import { TransactionsDetails } from './TransactionsDetails';

export const Transaction = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <TransactionsDetails key = {transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </div>
  );
};
