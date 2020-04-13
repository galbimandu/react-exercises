import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        className="search"
        type="search"
        placeholder="Search..."
        onChange={this.props.handleChange}
      />
    );
  }
}

export default SearchBox;
