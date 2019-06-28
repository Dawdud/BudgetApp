import React, {Component} from 'react';

import Header from './header';
import Modal from './Modal';
import Transactions from './Transactions';
import AddTransactions from'./AddTransaction';
import EditTransactions from './EditTransaction';
import SearchTransaction from './SearchTransaction';
import './App.scss';

class App extends Component {
  state = {
    transactions: [
      {id:1, name: 'hamburger', amount: 32, date:new Date().toLocaleString()},
      {id:2, name: 'pizza', amount: 12, date: new Date().toLocaleString()}
    ],
    show:false, 
    indexItem: 0,
    action:'add',
  }
  showModal= ()=>{
    this.setState({show: true})
  }
  hideModal= () =>{
    this.setState({show: false})
  }
  updateTransaction= (updateTransaction)=>{
  
   let transactions= this.state.transactions.map(transaction => {return transaction.id===updateTransaction.id?updateTransaction: transaction})
   
   this.setState({
     transactions
   })

   
   
  
  }
  searchTransaction= (transactions)=>{
    console.log(transactions)
  

  }

  deleteTransaction= (id)=>{
    const transactions = this.state.transactions.filter(transaction=>{
      return transaction.id !== id
    })
    this.setState({
      transactions
    })
   
  }
   getTransactionIndex= (index)=>{
    
    
    this.setState({
      show:true,
      action:'edit',
      indexItem: index,
    })
  }

  addTransaction = (transaction)=>{
    transaction.id= Math.random();
    let transactions= [...this.state.transactions, transaction];
    this.setState({
      action:'add',
      transactions: transactions
    })
    
   
  }
 
  render(){
    const action= this.state.action;
    console.log(action)
  return (
    <div className="budget-app container">
      <Header></Header>
      <SearchTransaction transactions= {this.state.transactions} searchTransaction={this.searchTransaction}/>
      <button type="button" onClick={this.showModal} data-target="modal1" className="btn modal-trigger indigo"> open </button>
      <Modal show={this.state.show} handleClose={this.hideModal}>
        { action==="add"?
      (<AddTransactions addTransaction={this.addTransaction} />):(
      <EditTransactions transaction={this.state.transactions[this.state.indexItem] } updateTransaction={ this.updateTransaction }/>)
        }
      </Modal>
      <Transactions transactions={this.state.transactions} deleteTransaction={this.deleteTransaction} getTransactionIndex={this.getTransactionIndex}/>
    
      
      
      

    </div>
  );}
}

export default App;
