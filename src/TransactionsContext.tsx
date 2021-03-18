
import {
  createContext, ReactNode, useEffect, useState,
} from 'react';
import { api } from './services/api';

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

type TransactionsInput = Omit<TransactionsProps, 'id' | 'createdAt'>

interface ContextData {
  transactions: TransactionsProps[];
  createTransaction:(transactions: TransactionsInput) => void;
}

export const TransactionsContext = createContext<ContextData>({} as ContextData);

export function TransactionsProvider({ children }:ChildrenProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transactions: TransactionsInput) {
    api.post('/transactions', transactions);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
