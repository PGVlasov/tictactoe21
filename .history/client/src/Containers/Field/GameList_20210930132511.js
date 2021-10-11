import React, { Component } from "react";
import classes from "./GameList.module.css";

export default class GameList extends Component {
  render() {
    return (
      <div className={classes.GameList}>
        <h1>Создайте игру или присоеденитесь к существующей</h1>
        <div className={classes.Container}>
          <div className={classes.Create}>Создайте игру</div>
          <div className={classes.List}>Присоеденитесь к игре</div>
          <div className={classes.PlayersRange}>Рейтинг Игроков</div>
        </div>
      </div>
    );
  }
}
