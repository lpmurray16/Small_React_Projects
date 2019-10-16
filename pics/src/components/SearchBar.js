import React from "react";
import "./ImageList.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit= {this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Logan's Image Search</label>
            <input
              type= 'text'
              value= {this.state.term}
              onChange= {e => this.setState({ term: e.target.value })}
              placeholder= "Type here..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
