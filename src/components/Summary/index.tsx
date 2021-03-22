import { useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  const {transactions} = useTransactions();

  const summary = transactions.reduce((accumulator,transaction) => {

    if(transaction.type === 'deposit') {
      accumulator.deposit += transaction.amount;
      accumulator.total += transaction.amount;
    }else {
      accumulator.withdraw += transaction.amount;
      accumulator.total -= transaction.amount;
    }

    return accumulator;

  },{
    deposit: 0,
    withdraw: 0,
    total: 0,
  });

 const background = summary.total < 0 ? 'negative' : 'highlight-background ';

  return (
    <Container>
      <div>
        <header>
          <p>Entradas </p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR',{
          style: 'currency',
          currency: 'BRL'
        }).format(summary.deposit)
        }
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas </p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong> -
          {new Intl.NumberFormat('pt-BR',{
          style: 'currency',
          currency: 'BRL'
        }).format(summary.withdraw)
        }</strong>
      </div>
      <div className= {background}>
        <header>
          <p>Entradas </p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR',{
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total)
        }</strong>
      </div>
    </Container>
  );
}
