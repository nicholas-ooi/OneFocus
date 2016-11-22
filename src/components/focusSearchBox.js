import React from 'react';
import ReactDOM from 'react-dom';

class FocusSearchBox extends React.Component
{

  constructor(props) {
    super();
    this.state = {searchValue: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }

  handleSubmit(event) {
    this.search();
    event.preventDefault();
  }

  search()
  {
    alert(this.state.searchValue);
  }


  render()
  {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
      Name:
      <input type="text" name="value" placeholder="search or paste URL" value={this.state.searchValue} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Search" />
      </form>
    );
  }


}

export default FocusSearchBox;
