import { React, Component } from "react";

class List extends Component {
  render() {
    return (
      <ul>
        {this.gameList}
        <li>игра 1</li>
        <li>игра 2</li>
        <li>игра 3</li>
        <li>игра 4</li>
      </ul>
    );
  }
}

export default List;
