import React from "react";
class SearchTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: props.transactions
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.transactions
    });
  }

  handleChange = e => {
    let currentList = [];
    let newList = [];
    if (e.target.value !== " ") {
      currentList = this.state.filtered;
      newList = currentList.filter(item => {
        const itemLowerC = item.name.toLowerCase();
        const inputFilter = e.target.value.toLowerCase();

        return itemLowerC.includes(inputFilter);
      });
    } else {
      console.log(newList);
      newList = this.state.filtered;
    }
    this.setState({
      filtered: newList
    });
    this.props.searchTransaction(this.state.filtered);
  };

  render() {
    return (
      <div>
        <div className="input-field">
          <label htmlFor="name"> search: </label>
          <input type="text" id="name" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
export default SearchTransaction;
