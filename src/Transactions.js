import React from 'react';
const  Transactions= ({transactions, deleteTransaction}) => {
    const transactionList=  transactions.length ?  (
        transactions.map( transactions => {
        return (<div key={transactions.id}>
            <p> {transactions.name}</p>
            <p> {transactions.amount}</p>
            <p> {transactions.date}</p>
            <button onClick={()=>{deleteTransaction(transactions.id)}}> usuń</button>
        </div>)
        })

    ) : (<p className="center">
        no transactions</p>)
    return( <div className="transaction-list">
       <h2>{transactionList}</h2>
    </div>)

}
export default Transactions