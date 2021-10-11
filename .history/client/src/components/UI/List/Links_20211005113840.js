import React, { Component } from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";

export default class Links extends Component() {
  state = {
    links: [],
  };

  async componentDidMount(state) {
    fetch("/users")
      .then((res) => res.json())
      .then(console.log("got something"))
      .then((links) => this.setState({ links }));

    this.setState({ loading: false });
  }
  render() {
    return (
      // <ul className={classes.ul}>
      <div>
        {this.state.links.map((link) => (
          // {links.map((link) => (
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
        {/* // </ul> */}
      </div>
    );
  }
}
