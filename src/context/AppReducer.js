import axios from 'axios';
import React, {useState} from 'react';
export default (state, action) => {
    switch (action.type) {
        case 'GET_TRANSACTION':
			return { 
				...state,
			 	transactions:  action.payload
				//  transactions: [...state.transactions, action.payload]
		};
		case 'ADD_TRANSACTION':
			return {
				...state,
				transactions: [...state.transactions, action.payload]
			};
        case 'DELETE_TRANSACTION':
         return {
				...state,
				transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
			};
        default:
            return state;
    }
}

