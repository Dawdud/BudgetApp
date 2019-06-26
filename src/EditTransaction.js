import React, { Component } from "react";

class EditTransaction extends Component {
  constructor(props){
    super(props);
  this.state = {
      id: props.transaction.id,
      name: props.transaction.name,
      amount: props.transaction.amount,
      date:  props.transaction.date,
  };
}
  
  componentDidUpdate(prevProps) {
    if( this.props.transaction.id !== prevProps.transaction.id){
    this.setState({
      id: this.props.transaction.id,
      name: this.props.transaction.name,
      amount:this.props.transaction.amount,
      date: this.props.transaction.date})
    }
  }


  handleChange = (e) =>{
    this.setState({
         
        [e.target.id]: e.target.value
    })
}
handleSubmit= (e) =>{
  e.preventDefault();
  this.props.updateTransaction(this.state)
  
}

  render() {
    
return this.props.transaction ?(
    <div>
        <form onSubmit={this.handleSubmit}>
        <div className="input-field">
          <label htmlFor="name"> Name of Transaction: </label>
          <input
          value={this.state.name} 
          type="text"
           id="name" 
          onChange={this.handleChange} />
        </div>
        <div className="input-field">

          <label htmlFor="amount"> amount: </label>
          <input 
          type="text" 
          id="amount"
          value={this.state.amount} 
          onChange={this.handleChange} />
        </div>
        <div className="datepicker">
          <label htmlFor="date"> date: </label>
          <input
            type="date"
            id="date"
            value= {this.state.date}
            className="datepicker"
            onChange={this.handleChange}
          />
        </div>
        <button>Update Transaction</button>
</form>
       
    </div>): (
     <div>
       <p> no element to edit</p>
     </div>
    );


    
  }
}
export default EditTransaction;
