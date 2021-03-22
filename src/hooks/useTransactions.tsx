
import {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';
import { api } from '../services/api';

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
  createTransaction:(transactions: TransactionsInput) => Promise<void>;
}

 const TransactionsContext = createContext<ContextData>({} as ContextData);

export function TransactionsProvider({ children }:ChildrenProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionsInput: TransactionsInput) {
  const response = await api.post('/transactions', {
    ...transactionsInput,
    createdAt: new Date(),
  });
  const {transaction} = response.data;

  setTransactions([
  ...transactions,
  transaction
])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
