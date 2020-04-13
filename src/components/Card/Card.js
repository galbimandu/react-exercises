import React, { Component } from "react";
import "./Card.css";

/***********************************************************
  Card 컴포넌트 구조
    <img src=이미지주소 alt="">
	  <h2>Name</h2>
	  <p>Email</p>

  Card 컴포넌트에서 props로 받아야하는 데이터는 id, name, email 입니다.
  props에서 해당하는 키값들을 추출하여 위와 같은 구조로 만들어주세요!

  이미지주소: `https://robohash.org/${숫자}?set=set2&size=180x180`
  카드마다 다른 이미지를 보여주기 위해
  위 주소의 숫자 부분을 props로 내려받은 id로 대체하셔야 합니다.

  Name 과 Email 도 마찬가지입니다.
***********************************************************/

class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { cards } = this.props;

    return (
      <>
        {cards.map(item => {
          return (
            <div className="card-container" key={item.id}>
              <img src={`https://robohash.org/${item.id}?set=set2&size=180x180`} alt="" />
              <h2>{item.name}</h2>
              <p>{item.email}</p>
            </div>
          )
        })}
      </>
    );
  }
}

export default Card;

//숫자가 다른 이미지주소를 monsters배열의 id로 가져와서 각각 다른 이미지를 뿌려준다. (템플릿 리터럴 그대로)