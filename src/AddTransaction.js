import React, {Component} from 'react'

class AddTransaction  extends Component{
    state= {
        name: null,
        amount: null,
        date: null,
        
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit= (e) =>{
        e.preventDefault();
        this.props.addTransaction(this.state)
        
    }
    render(){
        return( <div>
            <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                <label htmlFor="name"> Name of Transaction: </label>
                <input type="text" id="name" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                <label htmlFor="amount"> amount: </label>
                <input type="text" id="amount" onChange={this.handleChange}/>
                </div>
                <div className="datepicker">
                <label htmlFor="date"> date: </label>
                <input type="date" id="date" className="datepicker" onChange={this.handleChange}/>
                </div>
                <button> Submit</button>
            </form>
        </div>)
    }
}
export default AddTransaction;