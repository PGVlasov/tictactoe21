import React, { Component } from "react";
import classes from "./GameList.module.css";
import Button from "../../components/UI/Button/Button.js";
import Links from "../../components/UI/List/Links.js";

let gameList = [];
const links = new Array(3).fill('').map( ( i)=>({id: i, title: `Link #${i+1}`})

export default class GameList extends Component {
  createGame = () => {
    gameList.push(`<li>игра</li>`);
  };
 
  render() {
    return (
      <div className={classes.GameList}>
        <h1>Создайте игру или присоеденитесь к существующей</h1>
        <div className={classes.Container}>
          <div className={classes.Create}>
            <Button type="success" onClick={this.createGame}>
              Создайть игру
            </Button>
          </div>
          <div className={classes.List}>
            <h3>Присоеденитесь к игре</h3>
            <hr />
            <Links links={links}/>
          </div>
          <div className={classes.PlayersRange}>
            <h3>Рейтинг Игроков</h3>
            <hr></hr>
            <p>Рейтинг находится в разработке :)</p>
          </div>
        </div>
      </div>
    );
  }
}
