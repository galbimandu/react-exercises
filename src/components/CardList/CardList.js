import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.css";

class CardList extends Component {
  render() {
    return (
    <div 
      className="card-list"
      monsters={this.props.monsters}
    >
    <Card monsters={this.props.monsters}/>
    </div>);
  }
}

export default CardList;
