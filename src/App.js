import React, { Component } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import CardList from "./components/CardList/CardList";
import "./App.css";

/**********************************************************
  API 주소: https://jsonplaceholder.typicode.com/users

  1. 위 주소를 호출하여 데이터 로딩을 처리해주세요!
    - componentDidMount()
    - fetch
    - setState (monsters 에 저장)

  2. SearchBox 컴포넌트에 정의한 handleChange 메소드를 넘겨주고, 
     호출 시 인자로 들어오는 이벤트객체(e)를 활용해 userInput 으로 setState.

  3. 필터링 로직 구현 (filter 메소드 활용)
      여기서 비교 대상은 monster 객체의 name 값입니다.
      소문자로 바꾼 monster.name 값과 userInput값을 비교.
      filter 메소드가 반환하는 값을 변수에 저장 후 return 문 안에 CardList에 props로 전달
***********************************************************/

class App extends Component {
  state = {
    monsters: [],
    userInput: "",
  };

  // 데이터 로딩
  // SearchBox에 props로 넘겨줄 handleChange 메소드 정의
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => this.setState({ monsters: res }));
  }

  handleChange = (e) => {
    //
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    // 필터링 로직

    const { monsters } = this.state;

    const lcUserInputs = this.state.userInput.toLowerCase();

    const filteredObj = monsters.filter(item => {
      const lcLetters = item.name.toLowerCase();
      return lcLetters.includes(lcUserInputs);
    });

    //cardlist 컴포넌트에 monster를 prop으로 전달
    return (
      <div className="App" >
        <h1>컴포넌트 재사용 연습!</h1>
        <SearchBox handleChange={this.handleChange} />
        <CardList monsters={filteredObj} />
        {/* <SearchBox handleChange=정의한메소드 /> */}
        {/* <CardList monsters=필터링 된 몬스터리스트 /> */}
      </div>
    );
  }
}

//App.js에서 onchange이벤트에 handlechange 함수를 만들어 prop으로 넣어주면 searchbox에서 props로 내려받아서 자식에서 onchange를 달아주고 변경사항이 생겻을때 호출할 메소드는 부모에서 가지고오겠다. 
//부모에서 props로 handlechange메소드 넘겨지면 자식의 onchange이벤트에서 실행되는데 이 모든 내용이 부모로 다시와서(즉 이벤트객체를 부모에서 받아서) 부모 함수 내용대로 실행된다. 결국 바뀔내용은 부모에 있다.
//input가지고 조작하는데, filter를 여기서 쓰는데 input.name을 포함할 애들만 리턴하는게 포인트. 컴퓨터에서는 대소문자구분이 확실하므로 모든 문자를 다 대문자/소문자로 맞춰놓은다음에 비교해야한다.

export default App;
