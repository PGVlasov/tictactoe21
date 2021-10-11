import React, { Component } from "react";
import classes from "./GameList.module.css";
import Button from "../../components/UI/Button/Button.js";

export default class GameList extends Component {
  render() {
    return (
      <div className={classes.GameList}>
        <h1>Создайте игру или присоеденитесь к существующей</h1>
        <div className={classes.Container}>
          <div className={classes.Create}>
            <Button type="success">Создайть игру</Button>
          </div>
          <div className={classes.List}>
            <h3>Присоеденитесь к игре</h3>
            <hr />
          </div>
          <div className={classes.PlayersRange}>
            <h3>Рейтинг Игроков</h3>
          </div>
        </div>
      </div>
    );
  }
}
