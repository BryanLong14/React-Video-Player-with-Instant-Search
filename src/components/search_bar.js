import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <h4>
          Immediately Updating Search Results Brought to you by{" "}
          <a target="blank" href="https://reactjs.org/">
            React
          </a>
        </h4>
        <h4 className="SearchH4">Search For Videos:</h4>
        <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
