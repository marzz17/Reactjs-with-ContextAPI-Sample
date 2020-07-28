import React, { useContext,useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const Transaction = ({ transaction }) => {
	const sign = transaction.amount < 0 ? '-' : '+';
	const { deleteTransaction,getalldata} = useContext(GlobalContext);
		const deletedata =  (id) => {
			// event.preventDefault();
			deleteTransaction(id);
			// getalldata();
		}
	return (
		<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
			{transaction.text}{' '}
			<span>
				{sign}
				{Math.abs(transaction.amount)}
			</span>
			<button onClick={() => deletedata(transaction.id)} className="delete-btn">
				x
			</button>
		</li>
	);


};
