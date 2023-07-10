import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import { BalanceDetail } from './BalanceDetail';
import { History } from './History';
import { HistoryItem } from './HistoryItem';
import { Transaction } from './Transaction';

function App() {
  return (
    <div className="App">
     <Header />
     <Balance />
     <BalanceDetail />
     <History />
     <HistoryItem />
     <Transaction />

    </div>
  );
}

export default App;
