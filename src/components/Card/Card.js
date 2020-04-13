import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    // console.log(this.props.monsters)

    return (
      <>
        {this.props.monsters.map( (mons) => {
          return (
            <div className="card-container">
              <img src={`https://robohash.org/${mons.id}?set=set2&size=180x180`} alt="" />
              <h2>{mons.name}</h2>
              <p>{mons.email}</p>
            </div>
          )
        })}
      </>
    );
  }
}

export default Card;
