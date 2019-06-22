import React, {Component} from 'react';

import Header from './header';
import Modal from './Modal';
import Transactions from './Transactions';
import AddTransactions from'./AddTransaction';
import './App.scss';

class App extends Component {
  state = {
    transactions: [
      {id:1, name: 'hamburger', amount: 32, date:new Date().toLocaleString()},
      {id:2, name: 'pizza', amount: 12, date: new Date().toLocaleString()}
    ],
    show:false
  }
  showModal= ()=>{
    this.setState({show: true})
  }
  hideModal= () =>{
    this.setState({show: false})
  }

  deleteTransaction= (id)=>{
    const transactions = this.state.transactions.filter(transaction=>{
      return transaction.id !== id
    })
    this.setState({
      transactions
    })
  }
  addTransaction = (transaction)=>{
    transaction.id= Math.random();
    let transactions= [...this.state.transactions, transaction];
    this.setState({
      transactions: transactions
    })
   
  }
 
  render(){
  return (
    <div className="budget-app container">
      <Header></Header>
      <button type="button" onClick={this.showModal} data-target="modal1" class="btn modal-trigger indigo"> open </button>
      <Modal show={this.state.show} handleClose={this.hideModal}>
          <AddTransactions addTransaction={this.addTransaction} />
      </Modal>
      <Transactions transactions={this.state.transactions} deleteTransaction={this.deleteTransaction}/>
    </div>
  );}
}

export default App;
