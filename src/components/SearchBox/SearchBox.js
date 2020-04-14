import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search"
        type="search"
        placeholder="Search..."
        value={this.props.userInput}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default SearchBox;
