import React from "react";

class SearchBar extends React.Component {
  state = { term: "Type your search here..." };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit= {this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>IMAGE SEARCH</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
