import React, { Component } from "react";
import "./CardList.css";
import Card from "../Card/Card";

/***********************************************************
  Card 컴포넌트를 import 한 뒤, props로 내려받은 데이터에 
  map 함수를 호출해 각각 다른 데이터를 가진 Card 컴포넌트들을 리턴해주세요!
  Card 컴포넌트에서 필요로 하는 데이터는 id, name, email 입니다.
***********************************************************/

//monster정보가 갖고있는 배열/혹은 부모로부터 들어오는 배열을 그대로 전달받아 카드컴포넌트를 뿌려주는데 - monster객체에서 id,name,email이 있는데 이걸 props로 받아야함.

class CardList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { monsters } = this.props;

    return (

      <div className="card-list">
        <Card cards={monsters} />
      </div>
    );
  }
}

export default CardList;
