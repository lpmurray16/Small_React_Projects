import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import LoadSpinner from "./LoadSpinner";
import "./ErrorDisplay.css";
/**
 * Logan Murray
 * simple React app to show off Class based components
 * AND the 'State' functionality of React
 */
class App extends React.Component {
  // initializes the state of the component
  // constructor gets created under the hood
  state = { lat: null, errorMessage: "" };

  /**
   * This gets called as soon as the browser successfully mounts
   * and renders the component, but calling 'setState' anywhere
   * will trigger a re-render
   */
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  //helper function bcs we used conditional logic
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div className={`error-display`}>
          <h1>Error: {this.state.errorMessage}</h1>
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <LoadSpinner message="Just hit 'Allow' ya dingus..." />;
  }

  // In React we MUST have a render method!!
  render() {
    return (
      <div className="allPage">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
