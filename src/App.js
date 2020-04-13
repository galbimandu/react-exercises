import React, { Component } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import CardList from "./components/CardList/CardList";
import "./App.css";

class App extends Component {
  state = {
    monsters: [],
    userInput: "",
  };

  // 데이터 로딩
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then( (data) =>
        data.json()
      ).then( (data) =>
        this.setState({
          monsters: data
        })
      )
  }

  // SearchBox에 props로 넘겨줄 handleChange 메소드 정의
  handleChange = (e) => {
    // console.log(e.target.value)
    // debugger;
    this.setState({
      userInput: e.target.value.toLowerCase(),
    })
  }

  render() {
    // 필터링 로직
    const { monsters, userInput } = this.state;
    const filteredList = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(userInput)
    })
    console.log(filteredList); 

    return (
      <div className="App">
        <h1>컴포넌트 재사용 연습!</h1>
        <SearchBox handleChange={this.handleChange} userInput={this.state.userInput}/>
        <CardList monsters={filteredList} />
      </div>
    );
  }
}

export default App;
