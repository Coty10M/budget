import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Transaction } from './components/Transaction';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <Transaction/>
      <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
