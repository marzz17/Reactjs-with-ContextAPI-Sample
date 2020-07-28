import React, {createContext, useReducer, useState,useEffect } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
//Initial state
const initialState = {
	transactions: []
};

//Create Context
export const GlobalContext = createContext(initialState);
//Provider component
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);
  
   	useEffect(() => {
		getalldata();
	}, []);

	//Actions
    function getalldata() {
         	axios
			.get('http://localhost:1337/api/getExpenseIncome')
			.then((response) => {dispatch({ type: 'GET_TRANSACTION', payload: response.data})})
			.catch((error) => {console.log(error);});
    }
	function deleteTransaction(id) {
		 	axios
			.delete('http://localhost:1337/api/deleteExpenseIncome/' + id)
			.then((response) => {
				if (response.data === 'DELETE') {
					dispatch({type: 'DELETE_TRANSACTION',payload: id});
					alert('Successfully deleted!');
				}
			}).catch((error) => {console.log(error);});
	}
	function addTransaction(transaction) {
		  	axios
			.post('http://localhost:1337/api/saveExpenseIncome', transaction)
			.then((response) => {
				if (response.data === 'SAVED') {
					dispatch({ type: 'ADD_TRANSACTION',payload: transaction });
					alert('Successfully save!');
				}
			}).catch((error) => {console.log(error);});
      	
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
