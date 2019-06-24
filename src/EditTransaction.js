import React from './react'

const EditTransaction = props =>{
    return(<form>
        <div className="input-field">
                <label htmlFor="name"> Name of Transaction: </label>
                <input type="text" id="name"  onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                <label htmlFor="amount"> amount: </label>
                <input type="text" id="amount" onChange={this.handleChange}/>
                </div>
                <div className="datepicker">
                <label htmlFor="date"> date: </label>
                <input type="date" id="date" className="datepicker" onChange={this.handleChange}/>
                </div>
                <button></button>
    </form>) 
}