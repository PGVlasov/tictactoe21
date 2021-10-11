import React, { Component } from "react";
import classes from "./GameList.module.css";

export default class GameList extends Component {
  render() {
    return (
      <div className={classes.GameList}>
        <h1>Создайте игру или присоеденитесь к существующей</h1>
      </div>
    );
  }
}
