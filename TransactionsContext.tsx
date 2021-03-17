import {createContext, ReactNode, useEffect, useState} from 'react';
import { api } from './src/services/api';

interface TransactionsProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface ChildrenProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsProps[]>([])

export function TransactionsProvider({children}:ChildrenProps) {
  const [transactions,setTransactions] = useState<TransactionsProps[]>([])

  useEffect(()=> {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  },[])


  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
