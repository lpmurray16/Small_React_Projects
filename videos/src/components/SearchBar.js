import React from 'react';

class SearchBar extends React.Component {
  
  state = {myInput: ''};
  
 // in the case of an input change an event is triggered 
 onInputChange = event => {
   this.setState({ myInput: event.target.value });
 };

 onFormSubmit = event => {
   // below prevents the deletion of the typed search on refresh
   // or form submit.
   event.preventDefault();

   this.props.onFormSubmit(this.state.myInput);
 };
  
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Video</label>
            <input type="text" 
            placeholder="Type here..."
            value={this.state.myInput}
            onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;