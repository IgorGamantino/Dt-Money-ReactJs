import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext';


import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import {Container,SelectTransactionContainer,RadioBox} from './style'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen,onRequestClose}:NewTransactionModalProps) {
  const {createTransaction} = useContext(TransactionsContext);


  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState(0)
  const [category,setCategory] = useState('')
  const [selectType, isSelectType] = useState('deposit');

  function handleCreateNewTransaction(event:FormEvent) {
    event.preventDefault()

    createTransaction({
      title,
      amount,
      category,
      type: selectType
    })
  }

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className='react-modal-content'
  >
    <button
    type='button'
    onClick={onRequestClose}
    className='react-modal-clone'>
      <img src={closeImg} alt="close" />
    </button>

    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar transaçao</h2>

      <input
      placeholder='Titulo'
      value={title}
      onChange={event => setTitle(event.target.value)}
      />

      <input
      placeholder='Valor'
      type="number"
      value={amount}
      onChange={event => setAmount(Number(event.target.value))}
      />

      <SelectTransactionContainer>
        <RadioBox
        type='button'
        onClick={()=>{ isSelectType('deposit');}}
        isActive={selectType === 'deposit'}
        activeColor='green'
        >
        <img src={incomeImg} alt="Entrada" />
        <span>Entrada</span>
        </RadioBox>

        <RadioBox
        type='button'
        onClick={()=>{ isSelectType('withdraw');}}
        isActive={selectType === 'withdraw'}
        activeColor='red'

        >
        <img src={outcomeImg} alt="Saida" />
        <span>Saida</span>
        </RadioBox>

      </SelectTransactionContainer>

      <input
      placeholder='Categoria'
      value={category}
      onChange={event => setCategory(event.target.value)}
      />

       <button type='submit'>Cadastrar</button>
    </Container>
  </Modal>
  )
}