import { useContext } from 'react'
import { TransactionsContext } from '../../../TransactionsContext'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import {Container} from './styles'

export function Summary() {
  const data =useContext(TransactionsContext);
  console.log(data)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas </p>
          <img src={incomeImg} alt="Entradas"/>
          </header>
          <strong>R$ 100,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas </p>
          <img src={outcomeImg} alt="Saidas"/>
          </header>
          <strong>- R$ 50,00</strong>
      </div>
      <div className="highlight-background">
        <header >
          <p>Entradas </p>
          <img src={totalImg} alt="Total"/>
          </header>
          <strong>R$ 50,00</strong>
      </div>
    </Container>
  )
}
