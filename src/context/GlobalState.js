import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
  tasks: [],
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    // try {
    //   const res = await axios.get('/api/v1/transactions');

    //   dispatch({
    //     type: 'GET_TRANSACTIONS',
    //     payload: res.data.data
    //   });
    // } catch (err) {
    //   dispatch({
    //     type: 'TRANSACTION_ERROR',
    //     payload: err.response.data.error
    //   });
    // }
  }

  async function getTasks(name) {
    try {
      const res = await axios.get(`api/log/taskGroup/${name}`);

      dispatch({
        type: 'GET_TASKS',
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: 'TASK_ERROR',
        payload: err.response
      });
    }
  }

  async function enableTask(task) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(`api/task`, task, config);

      dispatch({
        type: 'ENABLE_TASK',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'ENABLE_TASK_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/transactions', transaction, config);

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    tasks: state.tasks,
    getTransactions,
    deleteTransaction,
    enableTask,
    addTransaction,
    getTasks
  }}>
    {children}
  </GlobalContext.Provider>);
}