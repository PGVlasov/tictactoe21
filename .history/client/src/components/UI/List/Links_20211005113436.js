import React, { Component } from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";
import { render } from "jade";

export default class Links extends Component() {
  state = {
    links: [],
  };
  render() {
    return (
      // <ul className={classes.ul}>
      <div>
        {this.state.links.map((link) => (
          <div className={classes.li} key={link.id}>
            {/* <a className={classes.a} href="/"> */}
            <a href={link.title} className={classes.a}>
              {" "}
              {"играть против:  " + link.creator}
            </a>

            {/* </a> */}
            <Button type="error">&times;</Button>
            {/* <a href="/">ssss</a> */}
          </div>
        ))}
      </div>
    );
  }
}
