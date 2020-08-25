import React, { useState } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const EditExpense = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSubmit = (expense) => {
    props.startEditExpense({ id: props.expense.id }, expense);
    props.history.push('/');
  };

  const handleRemoveExpense = () => {
    props.startRemoveExpense({ id: props.expense.id });
    props.history.push('/');
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleRequestClose = () => {
    setModalIsOpen(false);
  };

  const handleCancelModal = () => {
    setModalIsOpen(false);
  };

  const handleAcceptModal = () => {
    setModalIsOpen(false);
    handleRemoveExpense();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={handleAfterOpenModal}
        onRequestClose={handleRequestClose}
        // style={customStyles}
        overlayClassName='overlay'
        className='modal'
        contentLabel='Example Modal'
      >
        <div className='modal__content'>
          <p> Are you sure that you want to delete this expense?</p>
          <div className='modal__buttons'>
            <button onClick={handleCancelModal} className='button button--secondary'>
              Cancel
            </button>
            <button onClick={handleAcceptModal} className='button'>
              Accept
            </button>
          </div>
        </div>
      </Modal>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Edit Expense</h1>
        </div>
      </div>
      <div className='content-container'>
        <ExpenseForm expense={props.expense} onSubmit={onSubmit} />
        {/* <button className='button button--secondary' onClick={handleRemoveExpense}> */}
        <button className='button button--secondary' onClick={handleOpenModal}>
          Remove Expense
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
  };
};

const mapDispatchToProps = {
  startEditExpense: ({ id }, expense) => startEditExpense({ id }, expense),
  startRemoveExpense: ({ id }) => startRemoveExpense({ id }),
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
